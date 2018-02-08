var rate = 0.1;
var x = 0;
var y = 0;

function setup() { 
  createCanvas(400, 400);
} 

function draw(){
  background(250);
  fill(164, 200, 10);
	noStroke();
  ellipse (x, y, 30, 30);
	x = mouseX*rate + x*(1-rate);
	y = mouseY*rate + y*(1-rate);
}

