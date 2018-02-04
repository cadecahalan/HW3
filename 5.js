function setup() { 
  createCanvas(400, 400);
	background (110);
} 

var diameter = 10;

function draw() { 
  noStroke();
	if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  } else if (mouseIsPressed, key == 'E') { //erase
    fill(110);
		ellipse (mouseX, mouseY, 20);
	} else if (mouseIsPressed, key == '1') { //size1
		ellipse (mouseX, mouseY, 10, 10);
	} else if (mouseIsPressed, key == '2') { //size2
		ellipse (mouseX, mouseY, 20, 20);
	} else if (mouseIsPressed, key == '3') { //size3
		ellipse (mouseX, mouseY, 40, 40);
	}
}
	
function keyPressed() {
  print(key);
  if (key == 'R') { //red
    fill(225, 146, 146);
  } else if (key == 'G') { //green
    fill(118, 175, 138);
  } else if (key == 'B') { //blue
    fill(118, 141, 175); 
  } else if (key == 'Y') { //yellow
    fill(252, 254, 187); 
  } else if (key == 'A') { //aque
    fill(187, 244, 254); 
  } else if (key == 'O') { //orange
    fill(250, 206, 130); 
  } else if (key == 'P') { //purple
    fill(167, 157, 241); 
  } 
}
