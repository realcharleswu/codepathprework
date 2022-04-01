const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

const numBtns = 6;
const patternLength = 8;
var pattern = [];
var progress = 0;
var gamePlaying = false;

var tonePlaying = false;
var volume = 0.5;

var guessCounter = 0;

function randomInt(max) { //1 to max
  return Math.floor(Math.random()*max + 1);
}

function randomPattern(ptrnLen) { //generate random pattern of prtnLen, return type is list
  var ptrn = [];
  for (let i=0; i < ptrnLen; i++) {
    ptrn.push(randomInt(numBtns));
  }
  return ptrn;
}


function startGame() {
  pattern = randomPattern(patternLength); //8 buttons long
  progress = 0;
  gamePlaying = true;
  document.getElementById("startBtn").classList.add("hidden")
  document.getElementById("stopBtn").classList.remove("hidden")
  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("startBtn").classList.remove("hidden")
  document.getElementById("stopBtn").classList.add("hidden")
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 466.2,
  5: 523.2,
  6: 587.3
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn) {
  document.getElementById("b"+btn).classList.add("lit");
}

function clearButton(btn) {
  document.getElementById("b"+btn).classList.remove("lit");
}

function playOneClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn); //run first param fun after time on arg 3
  }
}

function playClueSequence(){
  guessCounter = 0;
  context.resume()
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playOneClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame() {
  stopGame();
  alert("Game over. You lost.")
}

function winGame() {
  stopGame();
  alert("Game over. You won!")
}

function guess(btn) {
  console.log("user guessed " + btn);
  if (!gamePlaying) {
    return;
  }
  //logic here
  if (pattern[guessCounter] == btn) {
    if (guessCounter == progress) { //guesses catch up to current progress in pattern
      if (progress == pattern.length - 1) {
        winGame()
      }
      else {// havent reached end yet
        progress++;
        playClueSequence();
      }
    }
    else { //guessCounter != progress
      guessCounter++
    }
  }
  else { //user got it wrong
    loseGame();
  }
}
