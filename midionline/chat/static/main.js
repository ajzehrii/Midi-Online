var audioContext = new AudioContext()
var oscillator;
var startTime = audioContext.currentTime



window.onload = function() {
  loadkeys();
};

function loadkeys() {             
  let messagesHtml = ``;
    
  messagesHtml +=`<button class=\'white\' id = "c" onmousedown = "keytap(0)" onmouseover = "keyslide(0)"  onmouseout = "end()">C[a]</button> <button class=\'black\' id ="c#" onmousedown=  "keytap(1)" onmouseover = "keyslide(1)"  onmouseout = "end()">C#[w]</button> <button class=\'white\' id="d" onmousedown = "keytap(2)" onmouseover = "keyslide(2)"  onmouseout = "end()">D[s]</button> <button class=\'black\' onmousedown=  "keytap(3)" onmouseover = "keyslide(3)"  onmouseout = "end()" id="d#">D#[e]</button> <button class=\'white\' onmousedown = "keytap(4)" onmouseover = "keyslide(4)"  onmouseout = "end()" id="e">E[d]</button> <button class=\'white\' onmousedown=  "keytap(5)" onmouseover = "keyslide(5)"  onmouseout = "end()" id="f">F[f]</button> <button class=\'black\' onmousedown = "keytap(6)" onmouseover = "keyslide(6)"  onmouseout = "end()" id="f#" >F#[t]</button> <button class=\'white\' onmousedown=  "keytap(7)" onmouseover = "keyslide(7)"  onmouseout = "end()" id="g">G[g]</button> <button class=\'black\' onmousedown = "keytap(8)" onmouseover = "keyslide(8)"  onmouseout = "end()" id="g#">G#[y]</button> <button class=\'white\' onmousedown=  "keytap(9)" onmouseover = "keyslide(9)"  onmouseout = "end()" id="a">A[h]</button> <button class=\'black\' onmousedown = "keytap(10)" onmouseover = "keyslide(10)"  onmouseout = "end()" id="a#">A#[u]</button> <button class=\'white\' onmousedown=  "keytap(11)" onmouseover = "keyslide(11)"  onmouseout = "end()" id="b">B[j]</button>`
  messagesHtml +=`<button class=\'white\' id = "c1" onmousedown = "keytap2(0)" onmouseover = "keyslide2(0)"  onmouseout = "end()">C[k]</button> <button class=\'black\' id ="c#1" onmousedown=  "keytap2(1)" onmouseover = "keyslide2(1)"  onmouseout = "end()">C#[o]</button> <button class=\'white\'  id="d1" onmousedown = "keytap2(2)" onmouseover = "keyslide2(2)"  onmouseout = "end()">D[l]</button> <button class=\'black\' onmousedown=  "keytap2(3)" onmouseover = "keyslide2(3)"  onmouseout = "end()" id="d#1" >D#[p]</button> <button class=\'white\' onmousedown = "keytap2(4)" onmouseover = "keyslide2(4)"  onmouseout = "end()" id="e1">E[;]</button> <button class=\'white\' onmousedown=  "keytap2(5)" id = "f1" onmouseover = "keyslide2(5)"  onmouseout = "end()">F[']</button> <button class=\'black\' onmousedown = "keytap2(6)" onmouseover = "keyslide2(6)" id="f#1" onmouseout = "end()">F#[]]</button> <button class=\'white\' onmousedown=  "keytap2(7)" onmouseover = "keyslide2(7)" id= "g1" onmouseout = "end()">G[↵]</button> <button class=\'black\' onmousedown = "keytap2(8)" onmouseover = "keyslide2(8)"  onmouseout = "end()" id = "g#1">G#[\\]</button> <button class=\'white\' onmousedown=  "keytap2(9)" onmouseover = "keyslide2(9)"  onmouseout = "end()" id = "a1">A[,]</button> <button class=\'black\' onmousedown = "keytap2(10)" onmouseover = "keyslide2(10)"  onmouseout = "end()" id = "a#1">A#[.]</button> <button class=\'white\' onmousedown=  "keytap2(11)" onmouseover = "keyslide2(11)"  onmouseout = "end()" id="b1">B[/]</button> <button class=\'white\' onmousedown = "keytap2(12)" onmouseover = "keyslide2(12)"  id = "c3" onmouseout = "end()">C[⇑]</button>`
    
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
var instrument = 'static/media/Grand.mp3'

var player
document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (event.repeat) { return }
  if (keyName === 'a') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(0)
    document.getElementById("c").style.background = "#6B6E70";
  }else if (keyName === 'w') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(1)
    document.getElementById("c#").style.background = "#6B6E70";
  }else if (keyName === 's') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(2)
    document.getElementById("d").style.background = "#6B6E70";
  }else if (keyName === 'e') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(3)
    document.getElementById("d#").style.background = "#6B6E70";
  }else if (keyName === 'd') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(4)
    document.getElementById("e").style.background = "#6B6E70";
  }else if (keyName === 'f') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(5)
    document.getElementById("f").style.background = "#6B6E70";
  }else if (keyName === 't') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(6)
    document.getElementById("f#").style.background = "#6B6E70";
  }else if (keyName === 'g') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(7)
    document.getElementById("g").style.background = "#6B6E70";
  }else if (keyName === 'y') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(8)
    document.getElementById("g#").style.background = "#6B6E70";
  }else if (keyName === 'u') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(10)
    document.getElementById("a#").style.background = "#6B6E70";
  }else if (keyName === 'h') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(9)
    document.getElementById("a").style.background = "#6B6E70";
  }else if (keyName === 'j') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap(11)
    document.getElementById("b").style.background = "#6B6E70";
  }else if (keyName === 'k') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(0)
    document.getElementById("c1").style.background = "#6B6E70";
  }else if (keyName === 'o') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(1)
    document.getElementById("c#1").style.background = "#6B6E70";
  }else if (keyName === 'l') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(2)
    document.getElementById("d1").style.background = "#6B6E70";
  }else if (keyName === 'p') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(3)
    document.getElementById("d#1").style.background = "#6B6E70";
  }else if (keyName === ';') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(4)
    document.getElementById("e1").style.background = "#6B6E70";
  }else if (keyName === '\'') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(5)
    document.getElementById("f1").style.background = "#6B6E70";
  }else if (keyName === ']') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(6)
    document.getElementById("f#1").style.background = "#6B6E70";
  }else if (keyName === 'Enter') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(7)
    document.getElementById("g1").style.background = "#6B6E70";
  }else if (keyName === '\\') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(8)
    document.getElementById("g#1").style.background = "#6B6E70";
  }else if (keyName === '.') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(10)
    document.getElementById("a#1").style.background = "#6B6E70";
  }else if (keyName === ',') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(9)
    document.getElementById("a1").style.background = "#6B6E70";
  }else if (keyName === '/') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(11)
    document.getElementById("b1").style.background = "#6B6E70";
  }else if (keyName === 'Shift') {
    document.getElementById('myVideo').playbackRate = 4.0;
    keytap2(12)
    document.getElementById("c3").style.background = "#6B6E70";
  }else if (keyName === 'ArrowRight'){
    octaveUp();
  }else if (keyName === 'ArrowLeft'){
    octaveDown();
  }else if (keyName === '1'){
    document.getElementById('myVideo').playbackRate = 5.0;
    
    playdrum('Kick');
    document.getElementById("Kick").style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";
  }else if (keyName === '2'){
    document.getElementById('myVideo').playbackRate = 5.0;
    
    playdrum('Clap');
    document.getElementById("Clap").style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";
  }else if (keyName === '3'){
    document.getElementById('myVideo').playbackRate = 5.0;
    
    playdrum('chi');
    document.getElementById("chi").style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";
  }else if (keyName === '4'){
    document.getElementById('myVideo').playbackRate = 5.0;
    
    playdrum('Perc');
    document.getElementById("Perc").style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";
  }else if (keyName === '5'){
    document.getElementById('myVideo').playbackRate = 5.0;
    
    playdrum('ohi');
    document.getElementById("ohi").style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";
  }else if (keyName === '6'){
    document.getElementById('myVideo').playbackRate = 5.0;
    
    playdrum('Roll');
    document.getElementById("Roll").style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";
  }else if (keyName === '7'){
    playloop("120")
  }else if (keyName === '8'){
    playloop("140");
  }else if (keyName === '9'){
    playloop("150")
  }
  document.getElementById("bet").style="position:absolute; top:45%; bottom:0; width: 100%; margin:auto; border-top:1px solid #57f157da; background-color: #0a0b0c; padding:4vh 0 0 5vh; box-shadow: 0px 20px 28px -19px #00ff0058 inset; transition: box-shadow 0.02s ease-in;"
}, false);

document.addEventListener('keyup', (event) => {
  const keyName = event.key;
  if (keyName === 'a') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("c").style = "button.white";
  }else if (keyName === 'w') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("c#").style = "button.black";
  }else if (keyName === 's') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("d").style = "button.white";
  }else if (keyName === 'e') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("d#").style = "button.black";
  }else if (keyName === 'd') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("e").style = "button.white";
  }else if (keyName === 'f') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("f").style = "button.white";
  }else if (keyName === 't') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("f#").style = "button.black";
  }else if (keyName === 'g') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("g").style = "button.white";
  }else if (keyName === 'y') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("g#").style = "button.black";
  }else if (keyName === 'u') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("a#").style = "button.black";
  }else if (keyName === 'h') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("a").style = "button.white";
  }else if (keyName === 'j') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("b").style = "button.white";
  }else if (keyName === 'k') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("c1").style = "button.white";
  }else if (keyName === 'o') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("c#1").style = "button.black";
  }else if (keyName === 'l') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("d1").style = "button.white";
  }else if (keyName === 'p') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("d#1").style = "button.black";
  }else if (keyName === ';') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("e1").style = "button.white";
  }else if (keyName === '\'') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("f1").style = "button.white";
  }else if (keyName === ']') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("f#1").style = "button.black";
  }else if (keyName === 'Enter') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("g1").style = "button.white";
  }else if (keyName === '\\') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("g#1").style = "button.black";
  }else if (keyName === '.') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("a#1").style = "button.black";
  }else if (keyName === ',') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("a1").style = "button.white";
  }else if (keyName === '/') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("b1").style = "button.white";
  }else if (keyName === 'Shift') {
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById("c3").style = "button.white";
  }else if (keyName === '1'){
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById('myVideo').style ="mix-blend-mode:color-burn;"
    document.getElementById("Kick").style = 'button.drums';
  }else if (keyName === '2'){
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById('myVideo').style ="mix-blend-mode:color-burn;"
    document.getElementById("Clap").style = 'button.drums';
  }else if (keyName === '3'){
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById('myVideo').style ="mix-blend-mode:color-burn;"
    document.getElementById("chi").style = 'button.drums';
  }else if (keyName === '4'){
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById('myVideo').style ="mix-blend-mode:color-burn;"
    document.getElementById("Perc").style = 'button.drums';
  }else if (keyName === '5'){
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById('myVideo').style ="mix-blend-mode:color-burn;"
    document.getElementById("ohi").style = 'button.drums';
  }else if (keyName === '6'){
    document.getElementById('myVideo').playbackRate = 1;
    document.getElementById('myVideo').style ="mix-blend-mode:color-burn;"
    document.getElementById("Roll").style = 'button.drums';
  }
  document.getElementById("bet").style= "keyboard";
}, false);

function keytap(frequency){
  play (oct1,frequency)
}
function keytap2(frequency){
  play (oct2,frequency)
}


function end(){
  player.stop(audioContext.currentTime+10)
}


var theme = "light"
function styleChange(){
  if (theme === "light"){
    document.getElementById("pagestyle").setAttribute("href", 'static/main2.css');  
    document.getElementById("c").style = "button.whiter";
    document.getElementById("c#").style = "button.blackr";
    document.getElementById("d").style = "button.whiter";
    document.getElementById("d#").style = "button.blackr";
    document.getElementById("e").style = "button.whiter";
    document.getElementById("f").style = "button.whiter";
    document.getElementById("f#").style = "button.blackr";
    document.getElementById("g").style = "button.whiter";
    document.getElementById("g#").style = "button.blackr";
    document.getElementById("a#").style = "button.blackr";
    document.getElementById("a").style = "button.whiter";
    document.getElementById("b").style = "button.whiter";
    document.getElementById("c1").style = "button.whiter";
    document.getElementById("c#1").style = "button.blackr";
    document.getElementById("d1").style = "button.whiter";
    document.getElementById("d#1").style = "button.blackr";
    document.getElementById("e1").style = "button.whiter";
    document.getElementById("f1").style = "button.whiter";
    document.getElementById("f#1").style = "button.blackr";
    document.getElementById("g1").style = "button.whiter";
    document.getElementById("g#1").style = "button.blackr";
    document.getElementById("a#1").style = "button.blackr";
    document.getElementById("a1").style = "button.whiter";
    document.getElementById("b1").style = "button.whiter";
    document.getElementById("c3").style = "button.whiter";
    theme = "dark"
  }else{
    document.getElementById("pagestyle").setAttribute("href", 'static/main.css');  
    document.getElementById("c").style = "button.white";
    document.getElementById("c#").style = "button.black";
    document.getElementById("d").style = "button.white";
    document.getElementById("d#").style = "button.black";
    document.getElementById("e").style = "button.white";
    document.getElementById("f").style = "button.white";
    document.getElementById("f#").style = "button.black";
    document.getElementById("g").style = "button.white";
    document.getElementById("g#").style = "button.black";
    document.getElementById("a#").style = "button.black";
    document.getElementById("a").style = "button.white";
    document.getElementById("b").style = "button.white";
    document.getElementById("c1").style = "button.white";
    document.getElementById("c#1").style = "button.black";
    document.getElementById("d1").style = "button.white";
    document.getElementById("d#1").style = "button.black";
    document.getElementById("e1").style = "button.white";
    document.getElementById("f1").style = "button.white";
    document.getElementById("f#1").style = "button.black";
    document.getElementById("g1").style = "button.white";
    document.getElementById("g#1").style = "button.black";
    document.getElementById("a#1").style = "button.black";
    document.getElementById("a1").style = "button.white";
    document.getElementById("b1").style = "button.white";
    document.getElementById("c3").style = "button.white";
    theme = "light"
  }
}
/*
#61892F
#86c232
#222629
#2c2f31
#474B4F

#6B6E70

#e3f1e8
#F2F2F2

*/


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


function playdrum (drum) {
  getSample("static/media/"+drum+".mp3", function buff (buffer) {
    player = audioContext.createBufferSource()
    player.buffer = buffer
    player.connect(audioContext.destination)
    player.start(startTime)

    player.detune.value = 0 * 100
    player.playbackRate.value = Math.pow(2, 0 / 12)

  })
}


loopplayer = audioContext.createBufferSource()
looppressed = false
function playloop (drum) {
  if (looppressed) {
    looppressed = false
    loopplayer.stop()
    document.getElementById(drum).style = 'button.drums';
  }else{
    getSample("static/media/"+drum+".mp3", function buff (buffer) {
      loopplayer = audioContext.createBufferSource()
      loopplayer.buffer = buffer
      loopplayer.connect(audioContext.destination)
      loopplayer.start(startTime)
      looppressed = true

      document.getElementById(drum).style="background-color:#00ff2aef; color:#00ff2a00; outline:rgb(0, 255, 0); border-radius:0.3em; z-index:1; border-width: 1px; box-shadow: 0 0 15px 0 rgba(0, 255, 0, 0.658), 0px 5px 50px 5px rgb(126, 126, 126) inset; transition: box-shadow 0.03s ease-in; ";

      loopplayer.detune.value = 0 * 100
      loopplayer.playbackRate.value = Math.pow(2, 0 / 12)

    })
  }
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
  instrument = 'static/media/'+inst+'.mp3'
  document.getElementById("myDropdown").classList.toggle("show");
}


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function myKeys() {
  document.getElementById("myKeys").classList.toggle("show2");
}

function mySynth() {
  document.getElementById("mySynth").classList.toggle("show2");
}
function myLeads() {
  document.getElementById("myLeads").classList.toggle("show2");
}
function myVocals() {
  document.getElementById("myVocals").classList.toggle("show2");
}
function myBass() {
  document.getElementById("myBass").classList.toggle("show2");
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

var bpm = 130;
var metron ="off"


this.reset = function(newT = t) {
  t = newT;
  return this.stop().start();
}
function metro(){
  if (metron === "on"){
    metron= "off"
    console.log(metron)
  }else{
    metron ="on"
    console.log(metron)
  }
}

count = 0;
var interval = setInterval(function() {
  if (metron === "off"){

  }else{
    getSample("static/media/temp.mp3", function buff (buffer) {
      loopplayer = audioContext.createBufferSource()
      loopplayer.buffer = buffer
      loopplayer.connect(audioContext.destination)
      loopplayer.start(startTime)

      if(count != 0){
        loopplayer.detune.value = -5 * 100
        loopplayer.playbackRate.value = Math.pow(2, 0 / 12)
      }else{
        loopplayer.detune.value = 0 * 100
        loopplayer.playbackRate.value = Math.pow(2, 0 / 12)
      }

      if (count == 3){
        count = 0
      }else{
        count +=1
      }
    })
  }
}, (60 * 1000) / bpm);




function bpmDown(){
  let messagesHtml = `<button class='scroll2' onclick="bpmDown()"> < </button> <h2 id = 'bpm'>${--bpm} </h2><h5>bpm</h5> <button class='scroll2' onclick="bpmUp()"> > </button>`;
  let messages = document.getElementById("bpslide");
  messages.innerHTML = messagesHtml;
  clearInterval(interval);
  interval = setInterval(function() {
    if (metron === "off"){
  
    }else{
      getSample("static/media/temp.mp3", function buff (buffer) {
        loopplayer = audioContext.createBufferSource()
        loopplayer.buffer = buffer
        loopplayer.connect(audioContext.destination)
        loopplayer.start(startTime)
  
        if(count != 0){
          loopplayer.detune.value = -5 * 100
          loopplayer.playbackRate.value = Math.pow(2, 0 / 12)
        }else{
          loopplayer.detune.value = 0 * 100
          loopplayer.playbackRate.value = Math.pow(2, 0 / 12)
        }
  
        if (count == 3){
          count = 0
        }else{
          count +=1
        }
      })
    }
  }, (60 * 1000) / bpm);
}

function bpmUp(){
  let messagesHtml = `<button class='scroll2' onclick="bpmDown()"> < </button> <h2 id = 'bpm'>${++bpm} </h2><h5>bpm</h5> <button class='scroll2' onclick="bpmUp()"> > </button>`;
  let messages = document.getElementById("bpslide");
  messages.innerHTML = messagesHtml;
  clearInterval(interval);
  interval = setInterval(function() {
    if (metron === "off"){
  
    }else{
      getSample("static/media/temp.mp3", function buff (buffer) {
        loopplayer = audioContext.createBufferSource()
        loopplayer.buffer = buffer
        loopplayer.connect(audioContext.destination)
        loopplayer.start(startTime)
  
        if(count != 0){
          loopplayer.detune.value = -5 * 100
          loopplayer.playbackRate.value = Math.pow(2, 0 / 12)
        }else{
          loopplayer.detune.value = 0 * 100
          loopplayer.playbackRate.value = Math.pow(2, 0 / 12)
        }
  
        if (count == 3){
          count = 0
        }else{
          count +=1
        }
      })
    }
  }, (60 * 1000) / bpm);
}