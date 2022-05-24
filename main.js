img="";
statuss="";
function preload(){
    img=loadImage("dog_cat.jpg")
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector= ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";

}

function modelLoaded(){
    console.log("model is loaded");
    statuss=true;
  objectDetector.detect(img,gotResult);
  
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("Dog",45,75);
    noFill();
    stroke("blue");
    rect(30,60,450,350);


  fill("blue");
    text("Cat",320,120);
    noFill();
    stroke("red");
    rect(300,90,270,320);
}