let ready = false;
let oscMain, synthMain, waveform, masterVolume, buffer;
// *******************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(30);
}
// *******************************************************
function draw() {
  background(25);
  audioCtxReady();
  if (ready) {
    drawWave();
  }
  // createVis();
}
// *******************************************************
function mousePressed() {
  if (ready === false) {
    ready = true;
    initAudio();
  }
}
// *******************************************************
function keyPressed() {
  handleMusicalTyping();
}
// *******************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}