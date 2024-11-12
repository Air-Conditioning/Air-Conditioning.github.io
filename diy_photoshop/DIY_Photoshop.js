var img;
var img2;
var initials ='ac'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
  img = loadImage('https://air-conditioning.github.io/images/redgem.png');
  img2 = loadImage('https://air-conditioning.github.io/images/coins.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    stroke(0);
    strokeWeight(2);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // red tool
    stroke(213, 62, 79);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '3') { // orange tool
    stroke(252, 141, 89);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '4') { // yellow tool
    stroke(249, 223, 89);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '5') { // green tool
    stroke(100, 229, 98);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '6') { // blue tool
    stroke(50, 136, 189);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '7') { // purple tool
    stroke(80, 44, 153);
    strokeWeight(5);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (key == '8') { // boxy fire (partly taken from Ivan's code)
    stroke(252, 141, 89);
    strokeWeight(2.7);
    fill(254, 224, 139);
    
    const distance = dist(mouseX, mouseY, pmouseX, pmouseY);
    
    const midX = (mouseX + pmouseX) / 2;
    const midY = (mouseY + pmouseY) / 2;
    
    square(midX, midY, distance);
    //testbox(20, 20, 200);
    //testbox(200, 20, 20);
    //line(mouseX, mouseY, pmouseX, pmouseY);
 
  } else if (toolChoice == '9') { // gray spray (taken from Ivan's code)
    stroke(100);
    strokeWeight(2);

    // find the speed of the mouse movement
    const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

    // set minimum radius and spray density of spraypaint brush
    const minRadius = 10
    const sprayDensity = 50
 
    // find radius of the spray paint brush and radius squared
    const r = speed + minRadius
    const rSquared = r * r

    // set the number of times we lerp the points in the for loop
    const lerps = 10

    // repeat the random points with lerping
    for (let i = 0; i < lerps; i++) {
        // find the lerped X and Y coordinates
      const lerpX = lerp(mouseX, pmouseX, i / lerps)
      const lerpY = lerp(mouseY, pmouseY, i / lerps)
    
    // draw a bunch of random points within a circle
    for (let j = 0; j < sprayDensity; j++) {
        // pick a random position within the circle
      const randX = random(-r, r)
      const randY = random(-1, 1) * sqrt(rSquared - randX * randX)

    // draw the random point
    point(lerpX + randX, lerpY + randY)
    }
    }
    
  } else if (toolChoice == '0') { // random color rectangle brush
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
    
  } else if (toolChoice == 'g' || toolChoice == 'G') { // gem brush
    image(img, mouseX-20, mouseY-20, 40, 40);
    
  } else if (toolChoice == 'h' || toolChoice == 'H') {  // coin stack brush
    image(img2, mouseX-15, mouseY-30, 30, 60);
    
  } else if (toolChoice == 'z' || toolChoice == 'Z') { // eraser
    stroke(screenbg);
    strokeWeight(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
    
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
}
