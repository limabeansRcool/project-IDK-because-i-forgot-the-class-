Webcam.set({
    width:350, height:300, image_format:'png', png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');
function capture() {
    
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML='<img id="capture_img" src="'+data_uri+'"/>';

        });

}

console.log('ml5 version: ', ml5.version);

classify= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/mD8YAE42m/model.json', model_loaded);
