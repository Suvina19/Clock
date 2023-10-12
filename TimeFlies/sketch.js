let y;
let r;
let g;
let b;

function setup() {
  createCanvas(600, 600);
  textSize(width / 10);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  let sc = second();
  let hr = hour();
  let mn = minute();
  
  fill(244, 200, b);
  noStroke();
  text(hr + ':'+ mn + ':' + sc, 400,y)
  
  r = random(255);
  g = random(255);
  b = random(255);

  
  y = map(sc, 0, 59, 0, height);
  stroke(255);
  line(200, 0, 200, 600);
  fill(244, 200, b);
  ellipse(200, y, 60, 60);

}
