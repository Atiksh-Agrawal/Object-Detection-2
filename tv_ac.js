function preload(){
    img1 = loadImage("2-500x500.jpg");
    img2 = loadImage("Tv_ac.PNG");
}

function setup(){
    canvas = createCanvas(700,480);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object";
}

function draw(){
    image(img2 ,0,0,700,480);

    fill("red");
    stroke("red");
    text("Television",125,275);
    noFill();
    rect(100,250,550,800);
}

function modelLoaded(){
    console.log("CocoSsd is initialized");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
       console.error(error);
 }
    else{
        console.log(results);
        objects = results;
 }
 }