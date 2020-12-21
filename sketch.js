var hr,mn,sc;
var hrAngleMode, minAngleMode, secAngleMode;


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}

function draw() {
  background(20,20,20);
  translate(350, 250);
  rotate(-90);

  hr= hour();
mn= minute();
sc= second();



scAngleMode = map(sc, 0, 60, 0, 360);
  minAngleMode = map(min, 0, 60, 0, 360);
  hrAngleMode = map(hr%12, 0, 12, 0, 360);

  push();
  rotate(secAngleMode);//Rotate it based on the angle
  stroke(80, 143, 91);
  strokeWeight(8);
  line(0, 0, 90, 0);
  pop();
  push();
  rotate(minAngleMode);//Rotate it based on the angle
  stroke(140, 55, 89);
  strokeWeight(8);
  line(0, 0, 75, 0);
  pop();

  //To draw hour hand
  push();
  rotate(hrAngleMode);//Rotate it based on the angle
  stroke(53, 64, 94);
  strokeWeight(8);
  line(0, 0, 50, 0);
  pop();

  //To focus on center
  strokeWeight(2);
  stroke(220, 20, 60);
  point(0, 0);

  //To draw arcs
  strokeWeight(10);
  noFill();

  //Arc format
  //arc(x, y, w, h, start, stop);

  //To draw sec
  stroke(60, 179, 113);
  arc(0, 0, 300, 300, 0, secAngleMode);

  //To draw min
  stroke(176, 224, 230);
  arc(0, 0, 280, 280, 0, minAngleMode);

  //To draw hour
  stroke(72, 61, 139);
  arc(0, 0, 260, 260, 0, hrAngleMode);


  
  drawSprites();
}