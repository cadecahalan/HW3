function yourPatch(x, y) {
  noFill();
  stroke(238);
  rect(x, y, 300, 300);
  
  //yellow circle
  strokeWeight(6);
	stroke(0);
  fill(255, 204, 0);
  ellipse(x+150, y+150, 250, 250);
  
  //mouth
  noStroke();
  fill (0)
	arc(x+150, y+195, 130, 95, 0, PI);
  
  //eyes
  var eyeSize = 10
  while (eyeSize < 80){
  noStroke();
  fill(0);
  ellipse(x+110, y+110, 30, eyeSize);
	ellipse(x+185, y+110, 30, eyeSize);
  eyeSize = eyeSize + 10;
}

}

background(255);
yourPatch(0, 0); // draw patch at upper-left

background(255);
yourPatch(width-301, height-301); // draw patch at lower-right
