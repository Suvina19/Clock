

//pendulum
let angle;

let angleV = 0;
let angleA = 0;

let bob;
let len;
let origin;

let gravity = 1;

function setup() {
  createCanvas(400, 600);
  origin = createVector(200, 300);
  angle = PI / 4;
  bob = createVector();
  len = 150;

}

function draw() {
  background(0);
  
  
  // drawing the clock
  stroke(111,78, 55);
  fill(111, 78, 55);
  rectMode(CENTER);
  rect(200, 300, 250, 500 );
  //drawing grandfather clock
  noStroke();
  fill(255);
  ellipseMode(CENTER);
  ellipse(200, 200, 200);
  
  
  // for moving the pendulum

  let force = gravity * sin(angle);
  angleA = (-1 * force) / len;
  angleV += angleA;
  angle += angleV;


  bob.x = len * sin(angle) + origin.x;
  bob.y = len * cos(angle) + origin.y;

  stroke(255);
  strokeWeight(8);
  line(origin.x, origin.y, bob.x, bob.y);
  circle(bob.x, bob.y, 30);
  
  //time function

  let hr = hour();
  let mn = minute();
  let sc = second();
  
  //fill(0);
  //noStroke();
  //text(hr + ':' + mn + ':' + sc, 180, 200 )
  
  strokeWeight(4);
  stroke(200);
  noFill();
  ellipse(200,200, 200, 200);
  
}
