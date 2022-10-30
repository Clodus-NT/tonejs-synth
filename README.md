# Clo-Synth

## About
Co-Synth is a monophonic synthesizer built with Tone.js and p5.js.

## Goal
My goal with this project was to challenge myself by working with unfamiliar JavaScript libraries and to hone my vanilla JavaScript skills. I also wanted to build something that could be enjoyed by anyone who comes across it. Clo-Synth is designed to be approachable for those who are unfamiliar with musical synthesizers while still appealing to synth fans as a fun, interactive project. Not to mention, I love synthesizers, so I built one :)

## Features:
- 4 different waveforms:
  - Sine
  - Triangle
  - Sawtooth
  - Square
- ADSR amplitude envelope
- Ability to use your computer keyboard to play notes
- Waveform visualizer

## How to Run Clo-Synth
You can check out the GitHub Pages deployment [here](https://clodus-nt.github.io/tonejs-synth/) or simply clone the repo and use a live server if you wish to fiddle around with the code.

# How to Use Clo-Synth

## Play Notes with Your Laptop/PC Keyboard
You can use the keys on your laptop/desktop computer keyboard to play notes. If you look at the synthesizer keyboard, there is a letter (or character) on each key. That letter (or character) is the corresponding key to type that will play a note. In order, the options you can type to play are: A W S E D F T G Y H U J K O L P ; ' (The last two characters are a semicolon and a single quote).

## Selecting Note Range
There are 8 selectable note ranges:
- C0-F1
- C1-F2
- C2-F3
- C4-F4
- C5-F6
- C6-F7
- C7-F8

### Select Lower Range
By pressing "Z", the playable note range will drop to the note range below the current. For example, if the selected note range is C3-F4, pressing "Z" will select the C2-F4 range.

### Select Higher Range
By pressing "X", the playable note range will move up to the note range above the current. For example, if the selected note range is C5-F6, pressing "X" will select the C6-F7 range.

## Selecting Waveform
There are 4 selectable waveforms:
- Sine (default)
- Triangle
- Sawtooth
- Square
To choose which waveform you would like to use, simply click the corresponding button.

## ADSR Envelope
If you are unfamiliar with how an ADSR (attack, decay, sustain, release) envelope works, I recommend checking out [this](https://www.masterclass.com/articles/adsr-envelope-explained) article that does a great job explaining what they are. Don't feel bad if it still isn't making sense. Just play around! Adjust the sliders to random positions and see what happens. Try pulling every slider all the way down and then adjust one at a time to see how they relate to one another. The concept of an envelope feels kind of abstract when you are first learning how to use them, but keep at it and you will be able to shape some cool sounds!

- Attack: the higher the slider, the longer the attack time
- Decay: the higher the slider, the longer the decay time before resting at the level of sustain
- Sustain: the higher the slider, the higher the level of sustain
- Release: the higher the slider, the longer the release time

## Wrapping Up

### Why Build a Synthesizer?
Not only did I want to challenge myself, I just straight up love synths!

### Do You Plan to Add More Features?
Yes! Well... in another version. I would love to add an effects rack, a filter, modulation sources and a choice between several of Tone's synthesizer offerings. However, I believe that Clo-Synth should remain simple for a wide appeal. In the future, I plan to build a second version that will appeal more to synth enthusiasts.

### Challenges
Clo-Synth was by far the most difficult project I have worked on. When I started building, I had very little experience with p5.js and had never even heard of Tone.js. I actually began by using the p5.js sound add-on, however, I soon found Tone.js. I decided to switch to Tone as I found that the library had more robust features. This meant rewriting a decent amount of the code, but with more power at my finger tips, came a more complicated design process. Simple things like triggering a note and triggering the release of that note was quite a challenge to work out. Tone's documentation is thorough, but somewhat confusing for a newcomer. Motivated by my love for synths (and having a fun project for my portfolio), I pressed on until I succeeded.

## Summary
Building Clo-Synth is hands down the most fun I've ever had with a project! It was just as challenging as it was rewarding and I'm looking forward to diving further into the ocean of Tone.js. I hope that Clo-Synth will inspire fellow developers to give Tone a try and provide a fun experience for users. Follow me on github to keep an eye out for my next Tone creation.