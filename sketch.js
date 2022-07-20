const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let picture;

function preload() {
  picture = loadImage("./images/small-dog.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(picture, 0, 0, width, height);
}
