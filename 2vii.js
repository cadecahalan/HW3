background (255);
strokeWeight (1);
noFill();

var count = 20

while (count < 100){
  rect ((width/6)-(count/2), (height/2)-(count/2), count, count);
  count = count + 20;   
}

count = 20

while (count < 100){
    rect ((width/2)-(count/2), (height/2)-(count/2), count, count);
  	count = count + 20;
}

count = 20

while (count < 100){
    rect ((width/1.2)-(count/2), (height/2)-(count/2), count, count);
  	count = count + 20;
}
