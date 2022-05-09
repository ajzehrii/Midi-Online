var audioContext = new AudioContext()
var oscillator;
var startTime = audioContext.currentTime



window.onload = function() {
  loadkeys();
};

function loadkeys() {             
  let messagesHtml = ``;
    
  messagesHtml +=`<button class=\'white\' onmousedown = "keytap(0)" onmouseover = "keyslide(0)"  onmouseout = "end()">C</button> <button class=\'black\' onmousedown=  "keytap(1)" onmouseover = "keyslide(1)"  onmouseout = "end()">C#</button> <button class=\'white\' onmousedown = "keytap(2)" onmouseover = "keyslide(2)"  onmouseout = "end()">D</button> <button class=\'black\' onmousedown=  "keytap(3)" onmouseover = "keyslide(3)"  onmouseout = "end()">D#</button> <button class=\'white\' onmousedown = "keytap(4)" onmouseover = "keyslide(4)"  onmouseout = "end()">E</button> <button class=\'white\' onmousedown=  "keytap(5)" onmouseover = "keyslide(5)"  onmouseout = "end()">F</button> <button class=\'black\' onmousedown = "keytap(6)" onmouseover = "keyslide(6)"  onmouseout = "end()">F#</button> <button class=\'white\' onmousedown=  "keytap(7)" onmouseover = "keyslide(7)"  onmouseout = "end()">G</button> <button class=\'black\' onmousedown = "keytap(8)" onmouseover = "keyslide(8)"  onmouseout = "end()">G#</button> <button class=\'white\' onmousedown=  "keytap(9)" onmouseover = "keyslide(9)"  onmouseout = "end()">A</button> <button class=\'black\' onmousedown = "keytap(10)" onmouseover = "keyslide(10)"  onmouseout = "end()">A#</button> <button class=\'white\' onmousedown=  "keytap(11)" onmouseover = "keyslide(11)"  onmouseout = "end()">B</button>`
  messagesHtml +=`<button class=\'white\' onmousedown = "keytap2(0)" onmouseover = "keyslide2(0)"  onmouseout = "end()">C</button> <button class=\'black\' onmousedown=  "keytap2(1)" onmouseover = "keyslide2(1)"  onmouseout = "end()">C#</button> <button class=\'white\' onmousedown = "keytap2(2)" onmouseover = "keyslide2(2)"  onmouseout = "end()">D</button> <button class=\'black\' onmousedown=  "keytap2(3)" onmouseover = "keyslide2(3)"  onmouseout = "end()">D#</button> <button class=\'white\' onmousedown = "keytap2(4)" onmouseover = "keyslide2(4)"  onmouseout = "end()">E</button> <button class=\'white\' onmousedown=  "keytap2(5)" onmouseover = "keyslide2(5)"  onmouseout = "end()">F</button> <button class=\'black\' onmousedown = "keytap2(6)" onmouseover = "keyslide2(6)"  onmouseout = "end()">F#</button> <button class=\'white\' onmousedown=  "keytap2(7)" onmouseover = "keyslide2(7)"  onmouseout = "end()">G</button> <button class=\'black\' onmousedown = "keytap2(8)" onmouseover = "keyslide2(8)"  onmouseout = "end()">G#</button> <button class=\'white\' onmousedown=  "keytap2(9)" onmouseover = "keyslide2(9)"  onmouseout = "end()">A</button> <button class=\'black\' onmousedown = "keytap2(10)" onmouseover = "keyslide2(10)"  onmouseout = "end()">A#</button> <button class=\'white\' onmousedown=  "keytap2(11)" onmouseover = "keyslide2(11)"  onmouseout = "end()">B</button> <button class=\'white\' onmousedown = "keytap2(12)" onmouseover = "keyslide2(12)"  onmouseout = "end()">C</button>`
    
  let messages = document.getElementById("keys");
  messages.innerHTML = messagesHtml;
}

//check if mouse is pressed
var mouseDown = 0;
function clicked() { 
  mouseDown = 1;
}
function unclicked() {
  mouseDown = 0;
}

var oct1 = -12
var oct2 = 0
var octave = 0

function octaveDown(){
  let messagesHtml = `<button class='scroll' onclick="octaveDown()"> < </button><h2> ${--octave} </h2><button class='scroll' onclick="octaveUp()"> > </button>`;
  let messages = document.getElementById("octave-select");
  messages.innerHTML = messagesHtml;
  oct1 -=12;
  oct2 -=12;
}

function octaveUp(){
  let messagesHtml = `<button class='scroll' onclick="octaveDown()"> < </button><h2> ${++octave} </h2><button class='scroll' onclick="octaveUp()"> > </button>`;
  let messages = document.getElementById("octave-select");
  messages.innerHTML = messagesHtml;
  oct1 +=12;
  oct2 +=12;
}

function keyslide(frequency){
    if (mouseDown == 0){

    }else{
        oscillator = audioContext.createOscillator()
        play(oct1,frequency)
    }
}

function keyslide2(frequency){
  if (mouseDown == 0){

  }else{
      oscillator = audioContext.createOscillator()
      play(oct2,frequency)
  }
}

function keytap(frequency){
  play (oct1,frequency)
}
function keytap2(frequency){
  play (oct2,frequency)
}
var player

function end(){
  player.stop(audioContext.currentTime + 10)
}

var instrument = 'static/media/Cowbell.wav'

function play (pitch,frequency) {
  getSample(instrument, function buff (buffer) {
    player = audioContext.createBufferSource()
    player.buffer = buffer
    player.connect(audioContext.destination)
    player.start(startTime)

    player.detune.value = pitch * 100
    player.playbackRate.value = Math.pow(2, frequency / 12)

  })
  //oscillator.detune.value = pitch * 100
  //oscillator.frequency.value =frequency * ((pitch+1)**2)
  //oscillator.connect(audioContext.destination)

  // add audioContext.currentTime
  //oscillator.start(audioContext.currentTime + 0)
}



function getSample (url, cb) {
    var request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = 'arraybuffer'
    request.onload = function () {
      audioContext.decodeAudioData(request.response, cb)
    }
    console.log("hello")
    request.send()
}
  
function updateIn(inst){
  instrument = 'static/media/'+inst+'.wav'
  document.getElementById("myDropdown").classList.toggle("show");
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}