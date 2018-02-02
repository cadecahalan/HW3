background (255);
strokeWeight (1);

var count = 0

line (width/2, count, width/2, count);

while (count < (width/2)){
  line ((width/2)-count, count, (width/2)+count, count);
  count = count + 10;
}

count = 0

while (count < width/2) {
  line (count, (height/2)+count, width-count, (height/2)+count);
  count = count + 10  
}

line (width/2, height, width/2, height);
