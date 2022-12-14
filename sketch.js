let ready = false;
let oscMain, synthMain, mstrVolume, ampEnv, waveform, masterVolume, buffer, canvas;
// *******************************************************
function setup() {
  canvas = createCanvas(windowWidth/2, windowHeight/3);
  canvas.parent('_canvas')
}
// *******************************************************
function draw() {
  background(25);
  audioCtxReady();
  if (ready) {drawWave()}; // Waveform Visualizer
}
// *******************************************************
function mousePressed() {
  if (ready === false) {
    ready = true;
    initAudio();
  }
}
// *******************************************************
function windowResized() {resizeCanvas(windowWidth/2, windowHeight/3)};