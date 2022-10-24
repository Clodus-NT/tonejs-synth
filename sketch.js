let ready = false;
let oscMain, synthMain, waveform, masterVolume, buffer, canvas;
// *******************************************************
function setup() {
  canvas = createCanvas(windowWidth, windowHeight/2.5);
  canvas.parent('_canvas')
  frameRate(30);
  createKeys();
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
  // selectWavform();
}
// *******************************************************
function keyPressed() {
  handleMusicalTyping();
}
// *******************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}