var audioContext = new AudioContext()
var oscillator;
var startTime = audioContext.currentTime



window.onload = function() {
  loadkeys();
};

function loadkeys() {             
  let messagesHtml = ``;
    
  messagesHtml +=`<button class=\'white\' id = "c" onmousedown = "keytap(0)" onmouseover = "keyslide(0)"  onmouseout = "end()">C</button> <button class=\'black\' id ="c#" onmousedown=  "keytap(1)" onmouseover = "keyslide(1)"  onmouseout = "end()">C#</button> <button class=\'white\' id="d" onmousedown = "keytap(2)" onmouseover = "keyslide(2)"  onmouseout = "end()">D</button> <button class=\'black\' onmousedown=  "keytap(3)" onmouseover = "keyslide(3)"  onmouseout = "end()" id="d#">D#</button> <button class=\'white\' onmousedown = "keytap(4)" onmouseover = "keyslide(4)"  onmouseout = "end()" id="e">E</button> <button class=\'white\' onmousedown=  "keytap(5)" onmouseover = "keyslide(5)"  onmouseout = "end()" id="f">F</button> <button class=\'black\' onmousedown = "keytap(6)" onmouseover = "keyslide(6)"  onmouseout = "end()" id="f#" >F#</button> <button class=\'white\' onmousedown=  "keytap(7)" onmouseover = "keyslide(7)"  onmouseout = "end()" id="g">G</button> <button class=\'black\' onmousedown = "keytap(8)" onmouseover = "keyslide(8)"  onmouseout = "end()" id="g#">G#</button> <button class=\'white\' onmousedown=  "keytap(9)" onmouseover = "keyslide(9)"  onmouseout = "end()" id="a">A</button> <button class=\'black\' onmousedown = "keytap(10)" onmouseover = "keyslide(10)"  onmouseout = "end()" id="a#">A#</button> <button class=\'white\' onmousedown=  "keytap(11)" onmouseover = "keyslide(11)"  onmouseout = "end()" id="b">B</button>`
  messagesHtml +=`<button class=\'white\' id = "c1" onmousedown = "keytap2(0)" onmouseover = "keyslide2(0)"  onmouseout = "end()">C</button> <button class=\'black\' id ="c#1" onmousedown=  "keytap2(1)" onmouseover = "keyslide2(1)"  onmouseout = "end()">C#</button> <button class=\'white\'  id="d1" onmousedown = "keytap2(2)" onmouseover = "keyslide2(2)"  onmouseout = "end()">D</button> <button class=\'black\' onmousedown=  "keytap2(3)" onmouseover = "keyslide2(3)"  onmouseout = "end()" id="d#1" >D#</button> <button class=\'white\' onmousedown = "keytap2(4)" onmouseover = "keyslide2(4)"  onmouseout = "end()" id="e1">E</button> <button class=\'white\' onmousedown=  "keytap2(5)" id = "f1" onmouseover = "keyslide2(5)"  onmouseout = "end()">F</button> <button class=\'black\' onmousedown = "keytap2(6)" onmouseover = "keyslide2(6)" id="f#1" onmouseout = "end()">F#</button> <button class=\'white\' onmousedown=  "keytap2(7)" onmouseover = "keyslide2(7)" id= "g1" onmouseout = "end()">G</button> <button class=\'black\' onmousedown = "keytap2(8)" onmouseover = "keyslide2(8)"  onmouseout = "end()" id = "g#1">G#</button> <button class=\'white\' onmousedown=  "keytap2(9)" onmouseover = "keyslide2(9)"  onmouseout = "end()" id = "a1">A</button> <button class=\'black\' onmousedown = "keytap2(10)" onmouseover = "keyslide2(10)"  onmouseout = "end()" id = "a#1">A#</button> <button class=\'white\' onmousedown=  "keytap2(11)" onmouseover = "keyslide2(11)"  onmouseout = "end()" id="b1">B</button> <button class=\'white\' onmousedown = "keytap2(12)" onmouseover = "keyslide2(12)"  id = "c3" onmouseout = "end()">C</button>`
    
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



document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName === 'a') {
    keytap(0)
    document.getElementById("c").style.background = "#979797";
  }else if (keyName === 'w') {
    keytap(1)
    document.getElementById("c#").style.background = "#979797";
  }else if (keyName === 's') {
    keytap(2)
    document.getElementById("d").style.background = "#979797";
  }else if (keyName === 'e') {
    keytap(3)
    document.getElementById("d#").style.background = "#979797";
  }else if (keyName === 'd') {
    keytap(4)
    document.getElementById("e").style.background = "#979797";
  }else if (keyName === 'f') {
    keytap(5)
    document.getElementById("f").style.background = "#979797";
  }else if (keyName === 't') {
    keytap(6)
    document.getElementById("f#").style.background = "#979797";
  }else if (keyName === 'g') {
    keytap(7)
    document.getElementById("g").style.background = "#979797";
  }else if (keyName === 'y') {
    keytap(8)
    document.getElementById("g#").style.background = "#979797";
  }else if (keyName === 'u') {
    keytap(10)
    document.getElementById("a#").style.background = "#979797";
  }else if (keyName === 'h') {
    keytap(9)
    document.getElementById("a").style.background = "#979797";
  }else if (keyName === 'j') {
    keytap(11)
    document.getElementById("b").style.background = "#979797";
  }else if (keyName === 'k') {
    keytap2(0)
    document.getElementById("c1").style.background = "#979797";
  }else if (keyName === 'o') {
    keytap2(1)
    document.getElementById("c#1").style.background = "#979797";
  }else if (keyName === 'l') {
    keytap2(2)
    document.getElementById("d1").style.background = "#979797";
  }else if (keyName === 'p') {
    keytap2(3)
    document.getElementById("d#1").style.background = "#979797";
  }else if (keyName === ';') {
    keytap2(4)
    document.getElementById("e1").style.background = "#979797";
  }else if (keyName === '\'') {
    keytap2(5)
    document.getElementById("f1").style.background = "#979797";
  }else if (keyName === ']') {
    keytap2(6)
    document.getElementById("f#1").style.background = "#979797";
  }else if (keyName === 'Enter') {
    keytap2(7)
    document.getElementById("g1").style.background = "#979797";
  }else if (keyName === '\\') {
    keytap2(8)
    document.getElementById("g#1").style.background = "#979797";
  }else if (keyName === '.') {
    keytap2(10)
    document.getElementById("a#1").style.background = "#979797";
  }else if (keyName === ',') {
    keytap2(9)
    document.getElementById("a1").style.background = "#979797";
  }else if (keyName === '/') {
    keytap2(11)
    document.getElementById("b1").style.background = "#979797";
  }else if (keyName === 'Shift') {
    keytap2(12)
    document.getElementById("c3").style.background = "#979797";
  }
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  // As the user releases the Ctrl key, the key is no longer active,
  // so event.ctrlKey is false.
  if (keyName === 'a') {
    document.getElementById("c").style.background = "#ffffff";
  }else if (keyName === 'w') {
    document.getElementById("c#").style.background = "#0a0a23";
  }else if (keyName === 's') {
    document.getElementById("d").style.background = "#ffffff";
  }else if (keyName === 'e') {
    document.getElementById("d#").style.background = "#0a0a23";
  }else if (keyName === 'd') {
    document.getElementById("e").style.background = "#ffffff";
  }else if (keyName === 'f') {
    document.getElementById("f").style.background = "#ffffff";
  }else if (keyName === 't') {
    document.getElementById("f#").style.background = "#0a0a23";
  }else if (keyName === 'g') {
    document.getElementById("g").style.background = "#ffffff";
  }else if (keyName === 'y') {
    document.getElementById("g#").style.background = "#0a0a23";
  }else if (keyName === 'u') {
    document.getElementById("a#").style.background = "#0a0a23";
  }else if (keyName === 'h') {
    document.getElementById("a").style.background = "#ffffff";
  }else if (keyName === 'j') {
    document.getElementById("b").style.background = "#ffffff";
  }else if (keyName === 'k') {
    document.getElementById("c1").style.background = "#ffffff";
  }else if (keyName === 'o') {
    document.getElementById("c#1").style.background = "#0a0a23";
  }else if (keyName === 'l') {
    document.getElementById("d1").style.background = "#ffffff";
  }else if (keyName === 'p') {
    document.getElementById("d#1").style.background = "#0a0a23";
  }else if (keyName === ';') {
    document.getElementById("e1").style.background = "#ffffff";
  }else if (keyName === '\'') {
    document.getElementById("f1").style.background = "#ffffff";
  }else if (keyName === ']') {
    document.getElementById("f#1").style.background = "#0a0a23";
  }else if (keyName === 'Enter') {
    document.getElementById("g1").style.background = "#ffffff";
  }else if (keyName === '\\') {
    document.getElementById("g#1").style.background = "#0a0a23";
  }else if (keyName === '.') {
    document.getElementById("a#1").style.background = "#0a0a23";
  }else if (keyName === ',') {
    document.getElementById("a1").style.background = "#ffffff";
  }else if (keyName === '/') {
    document.getElementById("b1").style.background = "#ffffff";
  }else if (keyName === 'Shift') {
    document.getElementById("c3").style.background = "#ffffff";
  }
}, false);

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