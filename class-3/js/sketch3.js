let xMax = 400;
let yMax = 600;

let xRazzo = xMax/2;
let yRazzo = yMax*0.6;


function drawStars (n=120){
  for (let i=0; i<120; i++) {
  let starX = (i*37) % width + (i%3)*5;
  let starY = ((i*73) % height) + (1%7);

  let randomTransparency = random(150, 255);
  let randomSize = random(2.8, 5.8);

  drawStar(i, starX, starY, randomTransparency, randomSize);
}
}

function drawStar(i, starX, starY, transparency, size){
  if (i%2==0){
  //stella tipo 
  fill(255, 255, 150, transparency);
  ellipse(starX, starY, size);
} else if (i%3==0){
  fill(255, 100, 255, transparency);
  ellipse(starX, starY, size);
} else {
  fill(100, 255, 255, transparency);
  ellipse(starX, starY, size);
}
}

function drawRazzo (){
  push();
  fill(220);
  stroke(40);
  rectMode(CENTER);
  rect(xRazzo, yRazzo+30, 80, 180, 20);

  fill (200, 40, 40);
  triangle(xRazzo-40, yRazzo-50, xRazzo+40, yRazzo-50, xRazzo, yRazzo-110)

  fill(40, 150, 220);
  stroke(255);
  strokeWeight(1);
  ellipse(xRazzo, yRazzo+30, 48, 48);
  pop();
}

function setup() {
  createCanvas(xMax, yMax);
  frameRate (30);
}

function moveRazzo(){

xRazzo = (xRazzo +1)%xMax;
yRazzo = yRazzo -1;


let soglia = - (yMax*0.6);
if (yRazzo < soglia) { 
  yRazzo = yMax;
}
}

function draw() {
  background("#9ab1ff");
  
  fill(0);//testo nero
  textSize(20);
  text("mouseX: " + mouseX + ",\
    mouseY: " + mouseY, 20,20)

push();

noStroke();

drawStars (370)
/*
  for (let i=0; i<120; i++) {
  let starX = (i*37) % width + (i%3)*5;
  let starY = ((i*73) % height) + (1%7);

  let randomTransparency = random(150, 255);
  let randomSize = random(2.8, 5.8);

  drawStar(i, starX, starY, randomTransparency, randomSize);
}
*/
pop();

/*
  if (i%2==0){
  //stella tipo 
  fill(255, 255, 150, transparency);
  ellipse(starX, starY, size);
} else if (i%3==0){
  fill(255, 100, 255, transparency);
  ellipse(starX, starY, size);
} else {
  fill(100, 255, 255, transparency);
  ellipse(starX, starY, size);
}
*/

pop();

drawRazzo ()
/*
  push();
  fill(220);
  stroke(40);
  rectMode(CENTER);
  rect(xRazzo, yRazzo+30, 80, 180, 20);

  fill (200, 40, 40);
  triangle(xRazzo-40, yRazzo-50, xRazzo+40, yRazzo-50, xRazzo, yRazzo-110)

  fill(40, 150, 220);
  stroke(255);
  strokeWeight(1);
  ellipse(xRazzo, yRazzo+30, 48, 48);
  pop();
*/

moveRazzo()
/*
xRazzo = (xRazzo +1)%xMax;
yRazzo = yRazzo -1;


let soglia = - (yMax*0.6);
if (yRazzo < soglia) { 
  yRazzo = yMax;
}
*/
}