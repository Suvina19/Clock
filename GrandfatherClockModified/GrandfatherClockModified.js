// Pendulum
let angle;            // Angle of the pendulum
let angleV = 0;       // Angular velocity of the pendulum
let angleA = 0;       // Angular acceleration of the pendulum
let bob;              // Bob's position
let len;              // Length of the pendulum
let origin;           // Origin of the pendulum
let gravity = 1;     // Gravitational constant for pendulum

function setup() {
  createCanvas(400, 600);   // Create a canvas with dimensions 400x600
  origin = createVector(200, 300);  // Set the origin of the pendulum
  angle = PI / 4;  // Initial angle of the pendulum
  bob = createVector();  // Initialize the bob's position
  len = 150;  // Length of the pendulum

}

function draw() {
  background(0);  // Set the background color to black

  // Drawing the clock frame
  stroke(111, 78, 55);  // Set stroke color for the clock frame
  fill(111, 78, 55);    // Set fill color for the clock frame
  rectMode(CENTER);    // Set the rectangle mode to center
  rect(200, 300, 250, 500);  // Draw the clock frame as a rectangle
  
  // Drawing grandfather clock
  noStroke();          // No stroke for the clock's face
  fill(255);            // Fill color for the clock's face
  ellipseMode(CENTER);  // Set the ellipse mode to center
  ellipse(200, 200, 200);  // Draw the clock's face as an ellipse

  // For moving the pendulum
  let force = gravity * sin(angle);  // Calculate the force on the pendulum
  angleA = (-1 * force) / len;       // Calculate angular acceleration
  angleV += angleA;                   // Update angular velocity
  angle += angleV;                   // Update angle

  bob.x = len * sin(angle) + origin.x;  // Calculate bob's x-coordinate 
  bob.y = len * cos(angle) + origin.y;  // Calculate bob's y-coordinate

  stroke(255);         // Set stroke color to white
  strokeWeight(8);     // Set stroke weight to 8
  line(origin.x, origin.y, bob.x, bob.y);  // Draw the pendulum rod
  circle(bob.x, bob.y, 30);              // Draw the bob at the end of the pendulum

  // Time function
  let hr = hour();     // Get the current hour
  let mn = minute();   // Get the current minute
  let sc = second();   // Get the current second

  strokeWeight(4);      // Set stroke weight to 4
  stroke(200);          // Set stroke color to gray
  noFill();
  ellipse(200, 200, 200, 200);  // Draw a clock face

  //---------------------------------------------------------
  
  // I asked chat gpt to convert my code that was in degrees to radians because I was not able to calculate it on my own. This is code that I tried but it was not working.
  //function setup() {
  //createCanvas(400, 600);
//}

//function draw() {
  //background(0);
  //translate(200, 200);
  //rotate(-PI/2);

  //let hr = hour();
  //let mn = minute();
  //let sc = second();

  //strokeWeight(8);
  //stroke(255, 100, 150);
  //noFill();
  //let secondAngle = map(sc, 0, 60, 0, 2*PI);

  //stroke(150, 100, 255);
  //let minuteAngle = map(mn, 0, 60, 0, 2*PI);

  //stroke(150, 255, 100);
  //let hourAngle = map(hr % 12, 0, 12, 0, 2*PI);

  //push();
  //rotate(secondAngle);
  //stroke(255, 100, 150);
  //line(0, 0, 100, 0);
  //pop();

  //push();
  //rotate(minuteAngle);
  //stroke(150, 100, 255);
  //line(0, 0, 75, 0);
  //pop();

  //push();
  //rotate(hourAngle);
  //stroke(150, 255, 100);
  //line(0, 0, 50, 0);
  //pop();

  //stroke(255);
  //point(0, 0);

 // -------------------------------------------------------------
  // Calculate angles for hour and minute hands (in radians)
  let hrAngle = map(hr % 12, 0, 12, 0, TWO_PI) - HALF_PI;  
  // Calculate the hour hand angle
  let mnAngle = map(mn, 0, 60, 0, TWO_PI) - HALF_PI;      
  // Calculate the minute hand angle
  let scAngle = map(sc, 0, 60, 0, TWO_PI) - HALF_PI;      
  // Calculate the second hand angle

  // Draw hour hand
  stroke(225, 193, 110);     // Set stroke color for the hour hand (red)
  strokeWeight(6);       // Set stroke weight for the hour hand
  line(200, 200, 200 + 50 * cos(hrAngle), 200 + 50 * sin(hrAngle));  // Draw the hour hand

  // Draw minute hand
  stroke(233, 116, 81);     // Set stroke color for the minute hand (blue)
  strokeWeight(4);       // Set stroke weight for the minute hand
  line(200, 200, 200 + 70 * cos(mnAngle), 200 + 70 * sin(mnAngle));  // Draw the minute hand
  
    // Draw second hand
  stroke(139, 0, 0);     // Set stroke color for the minute hand (blue)
  strokeWeight(4);       // Set stroke weight for the minute hand
  line(200, 200, 200 + 70 * cos(scAngle), 200 + 70 * sin(scAngle));  // Draw the minute hand
}
