var angle = 0;	
var scalar = 5;  
var startX = 200;	
var startY = 200;	

let switcher = false;

let button1;
let button2;	
let button3;	

let r = 255;
let g = 255;
let b = 255;

let r_ = 0;
let g_ = 0;
let b_ = 0;

let eSize = 8;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-container');
	background(0);
  angleMode(DEGREES);	
  
  button1 = createButton('Keep Pressing Me!');
  button1.position(70, 250);
  button1.size(200);
  button1.mousePressed(changeColor);
  button2 = createButton('Press me Alot Too');
  button2.position(670, 250);
  button2.size(200);
  button2.mousePressed(changeSize);
  button3 = createButton('Now Try Me');
  button3.position(1070, 250);
  button3.size(200);
  button3.mousePressed(goWild);
}
 
function draw() {
  var x = startX + scalar * cos(angle);
  var y = startY + scalar * sin(angle);
  
  noStroke();
  ellipse(x, y, eSize);
  
  if (switcher == false) {
    fill(r,g,b);
    scalar+=0.1;
    angle++;	
  } else {
    fill(r_,g_,b_);
    scalar-=0.1;
    angle--;	
  }
  
    
  if (x <= 0 || x >=400 || y <=0 || y >= 400){
    switcher = true;
  } 
  if (x == 200 && y == 200) {
    switcher = false;
  }
}

function changeColor() {
  r = random(255);
  g = random(255);
  b = random(255);
  r_ = random(255);
  g_ = random(255);
  b_ = random(255);
}

function changeSize() {
  eSize = random(2,20);
}

function goWild() {
  if (switcher == false) {
    scalar+=random(1,5);	
  } else {
    scalar-=random(1,5);	
  }
}