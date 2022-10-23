function audioCtxReady() {
  if (!ready) {
    background('black');
    fill('white');
    textAlign(CENTER, CENTER);
    text('CLICK TO START', width/2, height/2);
  }
}

function initAudio() {
  mainOsc = new Tone.Oscillator();
  mainOsc.type = 'square';
  mainOsc.frequency.value = 220;
  mainOsc.start();

  mainOsc.toDestination(); // Connect to audio output
}