

let speedx, speedy, lox, loy;
let radius;


function setup() {
  createCanvas(600,600);
  background(200);
  fill(255);
  angleMode(DEGREES);

  speedx = random(2, 5);
  speedy = random(2, 5);
  
  lox = width/2;
  loy = height/2;
  
  radius = 20;
}

function draw() {
  background(155, 229, 250);

  console.log(speedx + " " + speedy);

  if (lox < 10) { // bounce code for bird
    lox = 15;
    speedx = -speedx;
  }
  if (lox > width-60) {
    lox = width-65;
    speedx = -speedx;
  }
  if (loy < 30) {
    loy = 35;
    speedy = -speedy;
  }
  if (loy > height-80) {
    loy = height-85;
    speedy = -speedy;
  }

  // if (lox < 0) {  // wrap around code
  //   lox = width;
  // }
  // if (lox > width) {
  //     lox = 0;
  // }
  // if (loy < 0) {
  //     loy = height;
  // }
  // if (loy > height) {
  //     loy = 0;
  // }

  lox += speedx;  // movement
  loy += speedy;
  lox += random(0, 3);  // jitter
  loy += random(0, 3);

  cloud();
  flower();
  //                color,    x,  y, rotation, scale
  acbird1(color("lightblue"), color(101, 133, 186), 340, 370, 0, -0.5, 0.5);
  acbird2(color(246, 87, 193), color(143, 137, 89), lox, loy, 0, 0.7);
  
  // lwAstronaut2(color("lightblue"), lox, loy, 0, 1);


}

//         color, 2nd color x, y, rotation, scale
function acbird1(c, k, lx, ly, rot, sc, sc2) {
  fill(c);
  push();
  //noStroke();
  translate(lx, ly);
  rotate(rot);
  scale(sc, sc2);
  strokeWeight(1.5);
  wing(k, -20, 90, -60);
  tail(k, 0, 0, 0);
  body(c, 50, 60, 40);
  ellipse(0, 0, 60, 60);  // head / center
  tongue(color("pink"), -110, 70, -35);
  beak(color("yellow"), -15, 20, 0);
  eye(color(10), -27, -7, 0);
  eye(color(10), 0, -7, 0);
  wing(k, 0, 0, 0);
  pop();
}

function acbird2(c, k, lx, ly, rot, sc) {
  fill(c);
  push();
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  strokeWeight(1.5);
  wing(k, -20, 90, -60);
  tail(k, 0, 0, 0);
  body(c, 50, 60, 40);
  ellipse(0, 0, 60, 60);  // head / center
  beak(color("yellow"), -15, 20, 0);
  eye(color(10), -27, -7, 0);
  eye(color(10), 0, -7, 0);
  wing(k, 0, 0, 0);
  pop();
}

function flower() {
  push();
  fill("green");
  rect(410, 400, 10, 200);
  petal(375, 370, 147, 1);
  petal(420, 355, 30, 1);
  petal(355, 400, 85, 0.9);
  petal(450, 390, 80, 1);
  petal(380, 440, 20, 1);
  petal(430, 440, 145, 0.95);
  fill("yellow");
  translate(400, 400);
  rotate(30);
  ellipse(0, 0, 40, 50);
  pop();
}

function cloud(){
  push();
  noStroke();
  fill("white");
  ellipse(190, 105, 200, 60);
  ellipse(100, 130, 200, 40);
  ellipse(180, 125, 320, 50);
  pop();

}

function body(c, lx, ly, rot){
  fill(c);
  push();
  translate(lx,ly);
  rotate(rot);
  ellipse(0, 0, 130, 80);
  pop();
}

//        color, x,  y, rotation
function beak(c, lx, ly, rot){
  //console.log("arms");
  fill(c);
  push();
  translate(lx, ly);
  rotate(rot);
  triangle(-20, 0, -10, -15, 10, -15);
  pop();
}

function tongue(c, lx, ly, rot){
  fill(c);
  push();
  translate(lx, ly);
  rotate(rot);
  rect(0, 0, 100, 5);
  pop();
}

function eye(c, lx, ly, rot){
  //console.log("arms");
  fill(c);
  push();
  translate(lx,ly);
  rotate(rot);
  ellipse(0, 0, 10, 15);
  pop();
}

function wing(c, lx, ly, rot){
  fill(c);
  push();
  translate(lx,ly);
  rotate(rot);
  strokeWeight(1.5);
  bezier(35, 20, 150, -150, 200, -80, 75, 40);
  // bezier(35, 20, 10, 10, 90, -90, 15, 80);
  pop();
}

function tail(c, lx, ly, rot){
  fill(c);
  push();
  translate(lx,ly);
  rotate(rot);
  triangle(90, 90, 80, 150, 130, 150);
  pop();
}

function petal(lx, ly, rot, sc) {
  push();
  fill("red");
  translate(lx, ly);
  rotate(rot);
  scale(sc);
  ellipse(0, 0, 60, 80);
  pop();
}










// class Bird {


//   display () {
//     bird(color("lightblue"), lox, loy, 0);




//   }


//   movement () {


//   }

// }



// function lwAstronaut2(k,lx,ly,rot,sc){
//   push();
//   translate(lx,ly);
//   //rotate(random(10,20));
//   rotate(rot);
//   scale(sc);
//   body(k);  // the anchor
//   head2(k,20,-15);
  
// arm(k,3,15,150); // left arm
//   arm(k,41,5,20); // right arm
//   leg(k,2,75,20); //left leg
//   leg(k,20,80,-20);
// pop();
// }


// function body(k){
// console.log("body");
// fill(k);
// rect(0,0,40,80,10);
// }

// function head2(c,lx,ly){
// //console.log("head");
// push();
// fill(c);
// translate(lx,ly)
// rectMode(CENTER);
// //helmet and head
// ellipse(0, 0, 60, 60);
// fill(222,169,133);
// rect(0,0,40,40,10);
// //eyes
// fill(133,189,222);
// ellipse(-5,-8,5,5,);
// ellipse(5,-8,5,5);
// //mouth
// fill(0);
// ellipse(1,5,10,8);

// pop();
// }

// function arm(c,lx,ly,rot){
// //console.log("arms");
// fill(c);
// push();
// translate(lx,ly);
// rotate(rot);
// rect(0,0,65,15,5);
// pop();

// }

// function leg(c,lx,ly,rot){
// fill(c);
// push();
// translate(lx,ly);
// rotate(rot);
// rect(0,0,18,80,5);
// pop();

// }
