// Need user input to start program
function audioCtxReady() {
  if (!ready) {
    background('black');
    fill('white');
    textAlign(CENTER, CENTER);
    text('CLICK TO START', width/2, height/2);
  } 
}


// let volSlider = document.getElementById('_volCtrl');
// let volCtrl = function() {return volSlider.getValue()};
// volSlider.addEventListener('input', volSlider);
// console.log(volCtrl)
// Audio / Oscillator Setup
// let volCtrl = document.getElementById('_volCtrl').value;
// console.log(volCtrl)
function initAudio() {
  // let att = 0.03;
  // let dec = 1;
  // let sus = 0.4;
  // let rel = 2;

  synthMain = new Tone.Synth({
    oscillator: {type: 'sine'},
    envelope: {
      attack: 0.03,
      decay: 1,
      sustain: 0,
      release: 0.01
    }
  }).toDestination();
  // console.log(synthMain.envelope.attack)
  // Volume Control
  const volSlider = document.getElementById('_volCtrl');
  const volVal = volSlider.addEventListener('change', function(e) {
    Tone.Master.volume.value = e.currentTarget.value
    console.log(mstrVolume)
  });
  // mstrVolume = Tone.Master.volume.value = volVal; // In decibels

  // Envelope Controls
    // let mainEnv = new Tone.Envelope({
    //   attack: 0.03,
    //   decay: 1,
    //   sustain: 0.04,
    //   release: 5
    // }).toDestination();
  // let mainEnv = synthMain.oscillator.envelope;
  //   // Attack
  // const attSlider = document.getElementById('_attSlider');
  // const attVal = attSlider.addEventListener('change', function(e) {
  //   mainEnv.attack = e.currentTarget.value;
  //   console.log('attack: ', mainEnv.attack.value)
  // })

  waveform = new Tone.Waveform();
  Tone.Master.connect(waveform);
}

// Select the waveform handling
const selectSine = () => synthMain.oscillator.type = 'sine';
const selectTri = () => synthMain.oscillator.type = 'triangle';
const selectSaw = () => synthMain.oscillator.type = 'sawtooth';
const selectSquare = () => synthMain.oscillator.type = 'square';

// Draw Waveform to Canvas & Button Styling
function drawWave() {
  let sineWavBtn = document.getElementById('_sineBtn');
  let triWavBtn = document.getElementById('_triBtn');
  let sawWavBtn = document.getElementById('_sawBtn');
  let squareWavBtn = document.getElementById('_squareBtn');
  let oscType = synthMain.oscillator.type;

  switch (oscType) {
    case 'sine':
      triWavBtn.classList.remove('wavSelected'); // Remove classes
      sawWavBtn.classList.remove('wavSelected');
      squareWavBtn.classList.remove('wavSelected');
      sineWavBtn.classList.add('wavSelected'); // Add class to sine button
      stroke('#B833FF');
      fill('#B833FF');
      break;
    case 'triangle':
      sineWavBtn.classList.remove('wavSelected'); // Remove classes
      sawWavBtn.classList.remove('wavSelected');
      squareWavBtn.classList.remove('wavSelected');
      triWavBtn.classList.add('wavSelected'); // Add class to triangle button
      stroke('#FF10F0');
      fill('#FF10F0');
      break;
    case 'sawtooth':
      sineWavBtn.classList.remove('wavSelected'); // Remove classes
      triWavBtn.classList.remove('wavSelected');
      squareWavBtn.classList.remove('wavSelected');
      sawWavBtn.classList.add('wavSelected'); // Add class to saw button
      stroke('#33FF6C');
      fill('#33FF6C');
      break;
    case 'square':
      sineWavBtn.classList.remove('wavSelected'); // Remove classes
      triWavBtn.classList.remove('wavSelected');
      sawWavBtn.classList.remove('wavSelected');
      squareWavBtn.classList.add('wavSelected'); // Add class to square button
      stroke('#33D7FF');
      fill('#33D7FF')
      break;
  }
  
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