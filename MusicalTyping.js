// Maybe a buit long winded, but easiest way I could think of to populate note values into an array of arrays
let C0_Oct = ['C0', 'C#0', 'D0', 'D#0', 'E0', 'F0', 'F#0', 'G0', 'G#0', 'A0', 'A#0', 'B0', 'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1']; 
let C1_Oct = ['C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2']; 
let C2_Oct = ['C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3']; 
let C3_Oct = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4'];
let C4_Oct = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5']; 
let C5_Oct = ['C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6']; 
let C6_Oct = ['C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6', 'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7']; 
let C7_Oct = ['C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8', 'C#8', 'D8', 'D#8', 'E8', 'F8'];
let noteValArr = [];
noteValArr.push(C0_Oct, C1_Oct, C2_Oct, C3_Oct, C4_Oct, C5_Oct, C6_Oct, C7_Oct);

// These are the keyboard characters that will allow musical typing
// The length of this array is the same length as each note range array
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];

 // Reference index point for the C3 note range in noteValArr
 // This will be the default note range on page load
let C3ref = 3;

// Handles both note range selector and musical typing
function handleMusicalTyping() {
  //The increments or decrememts the playable note range
  if (keyIsPressed && key === 'z') {
    C3ref--;
  } else if (keyIsPressed && key === 'x') {
    C3ref++;
  }
  // Checks for key character in keyboardOptions
  // Then assigns a note within given range to that key
  // const now = Tone.now();
  for (let i = 0; i < keyboardOptions.length; i++) {
    if (keyIsPressed && key === keyboardOptions[i]) {
      let noteIndex = noteValArr[C3ref][i];
      synthMain.triggerAttackRelease(noteIndex);
    }
  //  if (keyboardOptions[i]){
  //   let noteIndex = noteValArr[C3ref][i];
  //   synthMain.triggerRelease(noteIndex)
  //  }
  }
}

// Generate Keys
function createKeys() {
  for (let i = 0; i < keyboardOptions.length; i++) {
    const keyboardUL = document.getElementById('_keyboardUL');
    const keyboardLI = document.createElement('_keyboardLI');
    keyboardLI.innerText = keyboardOptions[i].toUpperCase();
    keyboardLI.classList.add('key');
    keyboardUL.append(keyboardLI);
    switch (keyboardOptions[i]) {
      case 'w':
      case 'e':
      case 't':
      case 'y':
      case 'u':
      case 'o':
      case 'p':
        keyboardLI.classList.add('black-key');
        break;
      default:
        keyboardLI.classList.add('white-key');
    }
  }
}