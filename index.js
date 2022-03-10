const AWS = require('aws-sdk');
const fs = require('fs');

const Polly  = new AWS.Polly({
    region: 'us-east-1'
});

const input = {
    Text: "Hola soy polly",
    OutputFormat: "mp3",
    VoiceId: "Lupe"
} 

Polly.synthesizeSpeech(input, (err, data)=>{
    if(err){
        console.log(err);
        return;
    }
    if(data.AudioStream instanceof Buffer){
        fs.writeFile('hola.mp3', data.AudioStream, (fsErr)=>{
            if(fsErr){
                console.log(fsErr);
                return;
            }else{
                console.log("Exito");
            }
            
        });
    }
});