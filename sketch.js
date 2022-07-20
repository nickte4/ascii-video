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
  // image(picture, 0, 0, width, height);

  let w = width / picture.width;
  let h = height / picture.height;
  picture.loadPixels();

  for (let i = 0; i < picture.width; i++) {
    for (let j = 0; j < picture.height; j++) {
      const pixelIndex = (i + j * picture.width) * 4;
      const r = picture.pixels[pixelIndex + 0];
      const g = picture.pixels[pixelIndex + 1];
      const b = picture.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;

      noStroke();
      fill(avg);
      // square(i * w, j * h, w);
      textSize(w);
      text("G", i * w, j * h);
    }
  }
}
