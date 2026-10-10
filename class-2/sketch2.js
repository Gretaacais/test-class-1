let xMax = 400
let yMax = 600
let xRocket = xMax/2
let yRocket = yMax*0.6

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(20,24,40);

  push();
  fill(220);
  stroke(40);
  strokeWeight(2);
  rectMode(CENTER);
  rect(xRocket,yRocket+30, 80, 200, 20);

  fill(200, 40, 40);
  triangle(xRocket-40, yRocket-60,xRocket, yRocket-120, xRocket+40, yRocket-60);

  //fineeeeeestraaaaa
  fill(40,150,220);
  strokeWeight(3);
  ellipse(xRocket, yRocket-20, 48, 48);

//ali della libertà
  fill(180,30,30);
  stroke(40);
  strokeWeight(2);
  triangle(xRocket-40, yRocket+90, xRocket-80, yRocket+130, xRocket-20, yRocket+90); //sinistra
  triangle(xRocket+40, yRocket+90, xRocket+80, yRocket+130, xRocket+20, yRocket+90); //destra

  pop();

  push();
  randomSeed(99)
  noStroke(); 
  for(let i=0; i<120; i++){
    let sx = (i*37) % width + i%3;
    let sy = (i*73) % height + i%7;
    fill(255, 255, 255, random (150, 255));
    ellipse(sx,sy,random(1,2.8));
  /* if (i % 2 == 0){
      fill (255, 255, 150);
      ellipse(sx,sy,1);
    }else if (i % 3 == 0){
      fill (200, 100, 255);
      ellipse(sx,sy,1.5);
    }else{
      fill(255,255,100);
      ellipse(sx,sy,2.8);
    }*/
  };
 pop();
  
xRocket=(xRocket+1)%(xMax+120);
}