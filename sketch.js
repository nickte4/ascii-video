const density = "Ñ@#W$9876543210?!abc;:+=-,._ ";

let picture;

function preload() {
  picture = loadImage("./images/small-dog.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
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
      fill(255);
      // square(i * w, j * h, w);

      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, len, 0));

      textSize(w);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex), i * w, j * h);
    }
  }
}
