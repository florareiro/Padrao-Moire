var theta = 0.0;
var ellipseWidhtMultiplier = 10;
var ellipseHeightMultiplier = 20;
var rotationSpeed = 0.01;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  
  //stationary ellipse
  translate(width/2, height/2);
  //loop 25 times
  for(var i=0; i < 25; i++){
    rect(0, 0, i*ellipseWidhtMultiplier, i*ellipseHeightMultiplier);
  }
  
 //rotation ellipse
  rotate (theta);
  for (var i=0; i< 25; i++){
    rect(0, 0, i*ellipseWidhtMultiplier, i*ellipseHeightMultiplier );
  }
  theta += rotationSpeed
    
    
    
  
}