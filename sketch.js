let ready = false;
let mainOsc;
// *******************************************************
function setup() {
  createCanvas(windowWidth, windowHeight);
}
// *******************************************************
function draw() {
  background(25);
  // fill('white');
  // textAlign(CENTER, CENTER);
  // text("CLICK TO START", width/2, height/2)
  audioCtxReady();
}
// *******************************************************
function mousePressed() {
  if (ready === false) {
    ready = true;
    initAudio();
  }
}
// *******************************************************
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}