let img;
var canvas;
var mic;

function windowResized() {
  //console.log('resized');
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0);
  canvas.style('z-index', '-1');
  img = loadImage('assets/images/grey-logo.png');
  imageMode(CENTER);
}

// function keyPressed() {
//   clear();
// }

function draw() {
background(0);
image(img, windowWidth/2, windowHeight/2, 800, 800);

if (mouseX < windowWidth/2 && mouseX > windowWidth/5){
    s = map(mouseX, 0, windowHeight, 95, 20);
    d = map(mouseX, 0, windowHeight, 20, 95);

    r = map(mouseY, 0, windowHeight, 255, 0);
    b = map(mouseX, windowWidth/5, windowWidth/2, 0, 255);

   fill(0, r, b);
   noStroke();

   ellipse(windowWidth/2 - 133, windowHeight/2 - 240, s, s);
   ellipse(windowWidth/2 - 19, windowHeight/2 - 37, 45, 45);
   ellipse(windowWidth/2 + 62, windowHeight/2 - 255, s, s);
   ellipse(windowWidth/2 + 140, windowHeight/2 + 290, s, s);

   fill(b, 0, r);
   noStroke();

   ellipse(windowWidth/2 - 59, windowHeight/2 - 180, 45, 45);
   ellipse(windowWidth/2 + 80, windowHeight/2 - 102, s, s);
   ellipse(windowWidth/2 + 62, windowHeight/2 + 73, d, d);
   ellipse(windowWidth/2 + 105, windowHeight/2 + 220, 45, 45);
   ellipse(windowWidth/2 + 200, windowHeight/2 - 235, d, d);
   ellipse(windowWidth/2 - 165, windowHeight/2 - 102, d, d);

 }

 if (mouseX > windowWidth/2 && mouseX < (windowWidth - windowWidth/5)) {
   s = map(mouseX, windowWidth/2, windowWidth, 20, 95);
   d = map(mouseX, windowWidth/2, windowWidth, 95, 20);

   r = map(mouseY, 0, windowHeight, 0, 255);
   b = map(mouseX, windowWidth/2, (windowWidth - windowWidth/5), 255, 0);

   fill(0, r, b);
   noStroke();

   ellipse(windowWidth/2 - 19, windowHeight/2 - 102, d, d);
   ellipse(windowWidth/2 + 184, windowHeight/2 + 60, s, s);
   ellipse(windowWidth/2 - 59, windowHeight/2 - 308, 45, 45);
   ellipse(windowWidth/2 - 165, windowHeight/2 - 37, s, s);
   ellipse(windowWidth/2 + 155, windowHeight/2 - 235, d, d);

   fill(b, 0, r);
   noStroke();

   ellipse(windowWidth/2 - 59, windowHeight/2 - 308, 45, 45);
   ellipse(windowWidth/2 + 105, windowHeight/2 + 290, d, d);
   ellipse(windowWidth/2 + 217, windowHeight/2 + 220, 45, 45);
 }
}
