// I want the musical typing to start with a value related to C.
// Arrays for C0-C7 as well as mainOctArr are intitialized as empty.
// Then for loops are used to push the correct midi values to each C_Oct array.
// And finally, each of those arrays are pushed into the mainOctArr.
let C0_Oct = []; let C1_Oct = []; let C2_Oct = []; let C3_Oct = [];
let C4_Oct = []; let C5_Oct = []; let C6_Oct = []; let C7_Oct = [];
let mainOctArr = [];
// These are the keys on the keyboard that will trigger sound
const keyboardOptions = [
  'a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 
  'h', 'u', 'j', 'k', 'o', 'l', 'p', ';', '\''
];

// C0
for (let c0 = 12; c0 < 12 + 18; c0++) {
  C0_Oct.push(c0);
}
// C1
for (let c1 = 24; c1 < 24 + 18; c1++) {
  C1_Oct.push(c1);
}
// C2
for (let c2 = 36; c2 < 36 + 18; c2++) {
  C2_Oct.push(c2);
}
// C3
for (let c3 = 48; c3 < 48 + 18; c3++) {
  C3_Oct.push(c3);
}
// C4
for (let c4 = 60; c4 < 60 + 18; c4++) {
  C4_Oct.push(c4);
}
// C5
for (let c5 = 72; c5 < 72 + 18; c5++) {
  C5_Oct.push(c5);
}
// C6
for (let c6 = 84; c6 < 84 + 18; c6++) {
  C6_Oct.push(c6);
}
// C7
for (let c7 = 96; c7 < 96 + 18; c7++) {
  C7_Oct.push(c7);
}

mainOctArr.push(C0_Oct, C1_Oct, C2_Oct, C3_Oct, C4_Oct, C5_Oct, C6_Oct, C7_Oct);

// console.table('octaves: ', mainOctArr)