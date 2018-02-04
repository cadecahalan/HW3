function setup() { 
  createCanvas(400, 400);
} 

function draw(){
	
	background(250);
	
	fill(164, 200, 10);
	noStroke();
  ellipse (mouseX, mouseY, 30, 30);
}

//can't get the exponential moving average to work
