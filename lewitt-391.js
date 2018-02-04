background(255);
strokeWeight(20);

while (true) {

//alternating colors
stroke(random(360), random(100), random(100)); 
  
//box 1
rect (10, 10, (width/2)-10, (height/2)-10);
   
//box 1 - Fill
var count = 50
while (count < width/2){
line (count, 0, count, height/2);
count = count + 40;
}

//box 2
rect ((width/2), 10, (width/2)-10, (height/2)-10);

//box 2 - Fill
count = 50
while (count < height/2){
line ((width/2), count, width-10, count);
count = count + 40;
}

//box 3
rect (10, height/2, (width/2)-10, (height/2)-10);
  
//box 3 - Fill
count = 70

while (count < width/2 + 50){
line (0, (height/2) + count, count, height/2);
count = count + 50;
}

count = 50
while (count < (width/2) - 50){
line (count, height, width/2, (height/2)+count);
count = count + 50;
}

//box 4 
rect ((width/2), height/2, (width/2)-10, (height/2)-10);
    
//box 4 - FILL
count = 70
while (count < width/2 + 50){
line (width/2, height-count, (width/2) + count, height);
count = count + 50;
}

count = 50
while (count < width/2 - 50){
line (width/2 + count, height/2, width, height-count);
count = count + 50;
}  
}  
