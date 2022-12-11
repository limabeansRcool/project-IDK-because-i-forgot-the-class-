Webcam.set({
    width:300,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera=document.getElementById("camera");

Webcam.attach("#camera");

function captureIMG(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/ >';
    });
}

console.log("ml5 version", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/to-gEaqsk/model.json", modelloaded);

function modelloaded() {
    console.log("MODEL BE LOADED YAYA");
}
function identifyIMG(){
    img=document.getElementById("captured_img");
    classifier.classify(img, got_recon);

}
function got_recon(error, results) {
if (error) {
    console.log(error);
}
else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML=results[0].label;

    document.getElementById("result_object_accuracy").innerHTML=results[0].confidence.toFixed(3);
}
}
