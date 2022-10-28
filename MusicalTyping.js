// Maybe a buit long winded, but easiest way I could think of to populate note values into an array of arrays
// Tone will later convert these into frequency values when fed to triggerAttack() in keydown event handling
let C0_Oct = ['C0', 'C#0', 'D0', 'D#0', 'E0', 'F0', 'F#0', 'G0', 'G#0', 'A0', 'A#0', 'B0', 'C1', 'C#1', 'D1', 'D#1', 'E1', 'F1']; 
let C1_Oct = ['C1', 'C#1', 'D1', 'D#1', 'E1', 'F1', 'F#1', 'G1', 'G#1', 'A1', 'A#1', 'B1', 'C2', 'C#2', 'D2', 'D#2', 'E2', 'F2']; 
let C2_Oct = ['C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3']; 
let C3_Oct = ['C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4'];
let C4_Oct = ['C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4', 'C5', 'C#5', 'D5', 'D#5', 'E5', 'F5']; 
let C5_Oct = ['C5', 'C#5', 'D5', 'D#5', 'E5', 'F5', 'F#5', 'G5', 'G#5', 'A5', 'A#5', 'B5', 'C6', 'C#6', 'D6', 'D#6', 'E6', 'F6']; 
let C6_Oct = ['C6', 'C#6', 'D6', 'D#6', 'E6', 'F6', 'F#6', 'G6', 'G#6', 'A6', 'A#6', 'B6', 'C7', 'C#7', 'D7', 'D#7', 'E7', 'F7']; 
let C7_Oct = ['C7', 'C#7', 'D7', 'D#7', 'E7', 'F7', 'F#7', 'G7', 'G#7', 'A7', 'A#7', 'B7', 'C8', 'C#8', 'D8', 'D#8', 'E8', 'F8'];
let noteValArr = [];
noteValArr.push(C0_Oct, C1_Oct, C2_Oct, C3_Oct, C4_Oct, C5_Oct, C6_Oct, C7_Oct); // Holds all note ranges

// *******************************************************
  // These are the keyboard characters that will allow musical typing
  // The length of this array is the same length as each note range array
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];

// *******************************************************
  // Handles both note range selector and musical typing
let C3ref = 3; // Default index point for note range
let globalRngRef;
let noteIndex; // later assigned value of noteValArr[C3Ref]
let currentNoteRange = noteValArr[C3ref];
let globalKeyDown;
let noteRangeDisplay;

// *******************************************************
// Musical Typing event handling
  // KeyDown (triggerAttack())
document.addEventListener('keydown', (e) => {
  if (e.repeat) return; // Without this, the note would infinitely trigger an attack until released

  globalKeyDown = e.key // Store the most current key that was pressed

  for (let i = 0; i < keyboardOptions.length; i++) {
    if (globalKeyDown === keyboardOptions[i]) {
      noteIndex = noteValArr[C3ref][i]; // C3ref serves as entry index into noteValArr
      synthMain.triggerAttack(noteIndex); // Trigger note at given index
    }
  }
});

  // KeyUp (triggerRelease())
document.addEventListener('keyup', (e) => {
  for (let i = 0; i < keyboardOptions.length; i++) {
    if (e.key === globalKeyDown) { // Check to see if the most recent keydown = keyup
      synthMain.triggerRelease();
    }
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'q') {
    console.log(C3ref)
  }
})

// *******************************************************
  // Change Note Range
  document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    if (globalKeyDown === 'z') {
      C3ref--; // Dec default index for note range
      globalRngRef = C3ref;
    } else if (globalKeyDown === 'x') {
      C3ref++; // Inc default index for note range
      globalRngRef = C3ref;
    }
  })

for (let j = 0; j < noteValArr[C3ref].length; j++) {
  const noteRangeContainer = document.getElementById('_currentNoteRange');
  noteRangeDisplay = document.createElement('p');
  noteRangeDisplay.classList.add('currentNoteRange')
  noteRangeDisplay.innerText = noteValArr[C3ref][j].slice(0, -1);
  noteRangeContainer.append(noteRangeDisplay);

  // switch (C3ref) {
  //   case 0:
  //     noteRangeDisplay.innerText = noteValArr[0][j];
  //     console.log(C3ref)
  //     break;
  //   case 1:
  //     noteRangeDisplay.innerText = noteValArr[1][j];
  //     console.log(C3ref)
  //     break;
  //   case 2:
  //     noteRangeDisplay.innerText = noteValArr[2][j];
  //     console.log(C3ref)
  //     break;
  //   case 4:
  //     noteRangeDisplay.innerText = noteValArr[4][j];
  //     console.log(C3ref)
  //     break;
  //   case 5:
  //     noteRangeDisplay.innerText = noteValArr[5][j];
  //     console.log(C3ref)
  //     break;
  //   case 6:
  //     noteRangeDisplay.innerText = noteValArr[6][j];
  //     console.log(C3ref)
  //     break;
  //   case 7:
  //     noteRangeDisplay.innerText = noteValArr[7][j];
  //     console.log(C3ref)
  //     break;
  //   default:
  //     noteRangeDisplay.innerText = noteValArr[3][j];
  //     console.log(C3ref)
  // }
}

// if (C3ref > 3 || C3ref < 3) {
//   noteRangeDisplay = document.querySelectorAll('');
//   switch (C3ref) {
//     case 0:
//       noteRangeDisplay.innerText = noteValArr[0][j];
//       break;
//     case 1:
//       noteRangeDisplay.innerText = noteValArr[1][j];
//       break;
//     case 2:
//       noteRangeDisplay.innerText = noteValArr[2][j];
//       break;
//     case 4:
//       noteRangeDisplay.innerText = noteValArr[4][j];
//       break;
//     case 5:
//       noteRangeDisplay.innerText = noteValArr[5][j];
//       break;
//     case 6:
//       noteRangeDisplay.innerText = noteValArr[6][j];
//       break;
//     case 7:
//       noteRangeDisplay.innerText = noteValArr[7][j];
//       break;
//     default:
//       noteRangeDisplay.innerText = noteValArr[3][j];
//   }
// }

// *******************************************************
  // Generate Keys & Handle the mouse hover styling
  for (let i = 0; i < keyboardOptions.length; i++) {
    const keyboardUL = document.getElementById('_keyboardUL');
    const keyboardLI = document.createElement('li'); // Create <li> * 18 (the length of keyboardOptions)
    keyboardLI.innerText = keyboardOptions[i].toUpperCase(); // Display the corresponding option on each key 
    keyboardLI.classList.add('key');
    keyboardUL.append(keyboardLI); // Append each created key to the unordered list
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