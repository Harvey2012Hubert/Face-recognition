//https://teachablemachine.withgoogle.com/models/aSKH9xVWM/

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
})

camera = document.getElementById("camera")
Webcam.attach("#camera")

function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById(result). innerHTML='<img id="captured_image" src="'+data_uri+'"/>'
    })
}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/aSKH9xVWM/model.json', modelLoaded)