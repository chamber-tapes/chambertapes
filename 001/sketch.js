function setup() {
  createCanvas(800, 800);
  stroke(20, 0, 51, 45);
}

function draw() {
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY)
}
