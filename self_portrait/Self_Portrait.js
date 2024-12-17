function setup() {
createCanvas(600, 600);
background(178, 215, 239);
}
function draw() {
  //Back hair
  fill(30, 30, 45);
  quad(150, 200, 450, 190, 460, 505, 140, 505);
  
  //Neck
  strokeWeight(0);
  fill(239, 199, 146);
  rect(250, 450, 100, 300);
  
  //Ears
  fill(239, 199, 146);
  quad(130, 315, 150, 275, 370, 450, 160, 380);
  quad(470, 315, 450, 275, 230, 450, 440, 380);
  
  //Face
  strokeWeight(0);
  fill(239, 199, 146);
  ellipse(300, 300, 280, 380);
  
  //Eyes
  strokeWeight(0);
  fill(255, 255, 255);
  quad(350, 260, 390, 270, 410, 305, 325, 300);
  fill(0, 0, 0);
  ellipse(360, 283, 30, 35);
  fill(255, 255, 255);
  quad(250, 260, 210, 270, 190, 305, 275, 300);
  fill(0, 0, 0);
  ellipse(240, 283, 30, 35);
  
  //Mouth
  strokeWeight(0);
  fill(230, 140, 139);
  triangle(250, 400, 350, 390, 300, 450);
  
  //Glasses
  strokeWeight(1.5);
  let c = color(200, 200, 200);
  c.setAlpha(150);
  fill(c);
  rect(185, 245, 95, 80, 15, 15, 15, 15);
  rect(320, 245, 95, 80, 15, 15, 15, 15);
  //Bridge
  strokeWeight(1.5);
  noFill();
  arc(300, 260, 40, 15, PI, 0);
  //Stands
  strokeWeight(1.5);
  line(415, 260, 445, 230);
  line(185, 260, 155, 230);
  
  //Nose
  strokeWeight(1.5);
  line(270, 355, 300, 290);
  line(270, 355, 300, 380);
  
  //Eyebrows
  strokeWeight(2);
  arc(230, 250, 70, 40, PI, TWO_PI);
  arc(370, 250, 70, 40, PI, TWO_PI);
  
  //Hairburns
  strokeWeight(1.5);
  fill(15, 15, 15);
  arc(420, 220, 50, 250, 0, HALF_PI);
  arc(180, 220, 50, 250, HALF_PI, PI);
  
  //Hair
  fill(0, 0, 0);  
  quad(250, 113, 410, 100, 480, 250, 210, 180);
  quad(180, 100, 250, 120, 260, 190, 120, 300);  
  
  //Body
  strokeWeight(0);
  fill (0, 102, 218);
  quad(180, 520, 420, 520, 465, 600, 135, 600);
  //rect(150, 540, 300, 200, 15, 15, 15, 15);
  //, 15, 15, 15, 15);
}
