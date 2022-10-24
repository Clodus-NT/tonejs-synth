// Need user input to start program
function audioCtxReady() {
  if (!ready) {
    background('black');
    fill('white');
    textAlign(CENTER, CENTER);
    text('CLICK TO START', width/2, height/2);
  } 
}

// Audio / Oscillator Setup
function initAudio() {
  let att = 0.01;
  let dec = 1;
  let sus = 0.4;
  let rel = 4;

  // Create Main Oscillator
  // oscMain = new Tone.Oscillator();
  // oscMain.type = 'triangle';
  // oscMain.frequency.value = 220; // Note in hz
  // oscMain.start(); // Trigger sound
  // oscMain.toDestination(); // Connect to audio output
  synthMain = new Tone.Synth({
    oscillator: {type: 'triangle'},
    envelope: {
      attack: att,
      decay: dec,
      sustain: sus,
      release: rel
    }
  }).toDestination();
  Tone.Master.volume.value = -10; // In decibels

  waveform = new Tone.Waveform();
  Tone.Master.connect(waveform);
}

// Draw Waveform to Canvas
function drawWave() {
  stroke('white');
  // noFill();
  fill('white');
  
  let buffer = waveform.getValue(0);
  
  let start = 0; 
  for (let i=1; i < buffer.length; i++) {
    if (buffer[i-1] < 0 && buffer[i] >= 0) {
      start = i;
      break; // interrupts the for loop 
    }
  }
  let end = buffer.length/2 + start; 
  
  beginShape();
  for (let i=start; i < end; i++) {      
    let x = map(i, start, end, 0, width);
    let y = map(buffer[i], -1, 1, 0, height);      
    vertex(x, y);
  }
  vertex(width, height); // bottom right
  vertex(0, height); // bottom left
  endShape(CLOSE);
}