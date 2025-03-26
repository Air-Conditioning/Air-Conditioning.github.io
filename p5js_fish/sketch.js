

let customCursor;
let currentkey = "1";
let cx, cy;
let bgc;
let movement;
let pizza;
let goldfish;
let jellyfish;
let axolotl;
let aquarium;
let fshiny;
let fishT = "";
let textToggle = false;
let isFish = true;


function preload() {
  customCursor = loadImage("assets/pat.png")
  pizza = loadImage("assets/pizza.png")
  goldfish = loadImage("assets/fish.png")
  jellyfish = loadImage("assets/jellyfish.png")
  axolotl = loadImage("assets/axolotl.png")
  aquarium = loadImage("assets/aquarium.jpg")
  fshiny = loadFont("assets/supershiny.ttf")
}


function setup() {
  createCanvas(1400, 650);
  background(255);

  bgc = color(20,1);
  
  cx = width/2;
  cy = height/2;
  movement = 60;
  rectx = 0;
  recty = 0;
  textFont(fshiny);
  textSize(40);
}


function draw() {
  image(aquarium, 0, 0)
  // optional fade trick
  //fill(bgc);
  //rect(9,9,width,height);

  //----------------------------- Bubbles
  rectMode(CENTER);
  fill(0, 180, 200);
  if (recty <= 0) {
    rectx = random(width);
    recty = random(height);
  } else {
    recty -= 5
    rectx += random(-3, 3)
  }  
  rect(rectx, recty, 30, 30);
  //--------------------------------------

  image(axolotl, 900, 500, 150, 100);

  if (isFish) {
    image(goldfish, cx, cy, movement, movement);
    //console.log("Goldfish activated");
  } else {
    image(jellyfish, cx, cy, movement, movement);
    //console.log("Jellyfish activated");
  }

  text(fishT, cx, cy, 200);

  // checking then triggering the keyChoice for drawing
  if (keyIsPressed) {  // true/false
    keyChoice();
    //keyPressed();
  }

  mouseMoved();
  
}


function keyChoice() {
 // the 'key' maps what characters on the keyboard you can use.
 // switch statment
 let currentkey = key;
  switch(currentkey) {
    case 'a':
      console.log("a left");  // left
      if (cx >= 0) {
        cx+= -movement;
      }
      break;
    case 'w':
      console.log("w up");  // up
      if (cy >= movement) {
        cy+= -movement;
      }
      break;
    case 'd':
      console.log("d  right");  //right
      if (cx <= width - movement) {
        cx+= movement;
      }
      break;
    case 's':
      console.log("s down");  // down
      if (cy <= height - movement*2) {
        cy+= movement;
      }
      break;
    // case 't':
    //   console.log("t text: " + fishT);  // text
    //   fill(0, 80, 230);
    //   textToggle = !textToggle;
    //   if (textToggle){  // Toggle for text
    //     fishT = "Fish!";
    //   } else {
    //     fishT = "";
    //   }
    //   break;
    
    default:             // Default executes if the case labels
      console.log("None");   // don't match the switch parameter
      break;
    
  }

  key = "";  // you can empty it so, it does not double trigger

}

function mousePressed() {
  if ((mouseX >= 0 && mouseY >= 0) && (mouseX <= width && mouseY <= height)) {
    isFish = !isFish;
  }
}

function mouseMoved() {
  if (mouseX > 850 && mouseX < 1030 && mouseY > 490 && mouseY < 590) {
    noCursor();
    image(customCursor, mouseX, mouseY, 50, 50);
  } else {
    cursor(ARROW);
  }
}

function keyPressed() {
  if (key == 't' || key == 'T') {
    console.log("t text: " + fishT);  // text
    fill(0, 80, 230);
    textToggle = !textToggle;
    if (textToggle){  // Toggle for text
      fishT = "Fish!";
    } else {
      fishT = "";
    }
  }
}
