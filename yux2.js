document.write( '<img src="無題.png" id="ims" width="800">' );

document.write( '<div class="fadein2"><img src="black2.png" id="fadein" class="fadein" width="120%" height="100%"></div>' );
document.write( '<img src="black2.png" id="black" class="op0" width="120%" height="100%">' );
document.write( '<img src="stick.png" id="stickbody" width="600">' );
document.write( '<img src="stick.png" id="leftleg" class="leftleg" width="600">' );
document.write( '<img src="stick.png" id="rightleg" class="rightleg" width="600">' );
document.write( '<div id="stickface" class="item2"><div class="item rotateX" id="face2" width="600"><img src="stickhead.png" id="stickhead" type="file1" class="red" width="600"><div class="re-wrap" id="stickeye3"><img src="stickeye3.png" id="stickeye" class="re" width="600"></div></div></div>' );

const audio = new Audio('デジャブプール.mp3');
 
addEventListener('click', () => {
audio.play();
audio.loop = true;
});

document.write( '<img src="car.png" class="ti0" id="eye" width="250">' );
document.write( '<img src="rico.png" class="ti0" id="eye2" width="250">' );
document.write( '<img src="melon.png" id="bread" width="250">' );
document.getElementById( 'bread' ).style.display = 'none';

var y = 300;
var x = 500;
var ws = 10;
var stageloop = 0;
var stageX = -90;
var stageY = 0;
var SHL = stageX + 1440;
var walking = 2;

  fadein(); 

function bodylink() {

document.getElementById( 'stickhead' ).style.top = y + "px";
document.getElementById( 'stickhead' ).style.left = x + "px";
    
document.getElementById( 'stickeye3' ).style.top = y -40 + "px";
document.getElementById( 'stickeye3' ).style.left = x + "px";
	
document.getElementById( 'stickbody' ).style.top = y -30 + "px";
document.getElementById( 'stickbody' ).style.left = x -15 + "px";

document.getElementById( 'leftleg' ).style.top = y +40 + "px";
document.getElementById( 'leftleg' ).style.left = x -15 + "px";

document.getElementById( 'rightleg' ).style.top = y +40 + "px";
document.getElementById( 'rightleg' ).style.left = x -15 + "px";
}

let intervalID = setInterval(bodylink);

function fadeout() {
  const element = document.getElementById("fadein");
  if (element.classList.contains("fadein")) {
    element.classList.remove("fadein");
    element.classList.add("fadeout");
  }
}

function fadein() {
  const element = document.getElementById("fadein");
  if (element.classList.contains("fadeout")) {
    element.classList.remove("fadeout");
    element.classList.add("fadein");
  }
}

function screenout() {
  const element = document.getElementById("black");
  if (element.classList.contains("op1")) {
    element.classList.remove("op1");
    element.classList.add("op0");
  }
}

function screenin() {
  const element = document.getElementById("black");
  if (element.classList.contains("op0")) {
    element.classList.remove("op0");
    element.classList.add("op1");
  }
}

var motion = 0;
var lr = -1;

addEventListener( "keydown", keydownfunc1 );

function keydownfunc1( event ) {
	var key_code = event.keyCode;
if( key_code === 37 ) {
cos3(); cos(); lr = -1;
if( motion != 1 ) {
motion = 1;
walk();
}
}
if( key_code === 39 ) {
lr = 1;
cos4();
cos2();
if( motion != 1 ) {
motion = 1;
walk();
}
}
if( key_code === 16 )  {
motion = 1;
ws = 5;
if(stageX < leftend) {
if(lr === -1) stageX += 20
}
if(stageX > rightend) {
if(lr === 1) stageX -= 20
}
}
    
}
function cos() {
    const changeimg = document.getElementById("stickeye");
    changeimg.src = "stickeye3.png";
}

function cos2() {
    const changeimg = document.getElementById("stickeye");
    changeimg.src = "stickeye.png";
}

function cos3() {
    const changeimg = document.getElementById("stickhead");
    changeimg.src = "stickhead.png";
}

function cos4() {
    const changeimg = document.getElementById("stickhead");
    changeimg.src = "stickhead4.png";
}

addEventListener( "keyup", keyupfunc1 );

function keyupfunc1( event ) {
	var key_code = event.keyCode;
if( key_code === 37 ) {
motion = 0;
rrr();
}
if( key_code === 39 ) {
motion = 0;
rrr();
}
if( key_code === 16 )  {
motion = 0;
ws = 10;
rrr();
}
}
const image = document.getElementById('rightleg'); 
const image2 = document.getElementById('leftleg');
const image3 = document.getElementById('rightleg'); 
const image4 = document.getElementById('leftleg'); 
const image5 = document.getElementById('stickface'); 
const image6 = document.getElementById('stickface'); 
const image7 = document.getElementById('stickface'); 
addEventListener( "keydown", a );
function walk() {
if (motion === 1) {
if (ws === 10) {
image.animate(

  [
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-15deg)'}, 
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(15deg)' },
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-15deg)'},
    { transform: 'rotate(0deg)'}
  ], 
  
  {
    fill: 'backwards', 
    duration: 1000, 
  },
);

image2.animate(
   [
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(15deg)'}, 
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-15deg)' },
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(15deg)'},
    { transform: 'rotate(0deg)'}
  ], 

  {
    fill: 'backwards', 
    duration: 1000,
  },
);
image5.animate(

  [
    { transform: 'translateY(0px)'},
    { transform: 'translateY(2px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(2px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)'}
  ], 
    
  {
    fill: 'backwards',
    duration: 1000,
  },
);
}
if (ws === 5) {
image.animate(

  [
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(30deg)' },
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-30deg)'},
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(30deg)' },
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-30deg)'},
    { transform: 'rotate(0deg)'}
  ], 
  
  {
    fill: 'backwards', 
    duration: 1000, 
  },
);

image2.animate(

  [
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-30deg)' },
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(30deg)'},
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(-30deg)' },
    { transform: 'rotate(0deg)'},
    { transform: 'rotate(30deg)'},
    { transform: 'rotate(0deg)'}
  ], 

  {
    fill: 'backwards', 
    duration: 1000, 
  },
);
image6.animate(

  [
    { transform: 'translateY(0px)'},
    { transform: 'translateY(2px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(2px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(2px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(2px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-2px)' },
    { transform: 'translateY(0px)'}
  ], 
    
  {
    fill: 'backwards', 
    duration: 1000, 
  },
);
}

}
}
rrr();
function rrr() {
if( motion === 0 ) {
image7.animate(

  [
    { transform: 'translateY(0px)'},
    { transform: 'translateY(4px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-4px)'},
    { transform: 'translateY(0px)'}
  ], 
    
  {
    fill: 'backwards',     duration: 4000,
  },
);
}
}

function motion1() {
image3.animate(

  [
    { transform: 'rotate(15deg)'}, 
    { transform: 'rotate(0deg)'}
  ], 

  {
    fill: 'backwards', 
    duration: 500, 
  },
);
image4.animate(

  [
    { transform: 'rotate(-15deg)'}, 
    { transform: 'rotate(0deg)'}
  ], 

  {
    fill: 'backwards', 
    duration: 500, 
  },
);
}
let intervalId = setInterval(walk, 1000);
let intervalId2 = setInterval(rrr, 4000);

var leftend = 670;
var rightend = -1990;

addEventListener( "keydown", keydownfunc2 );

function keydownfunc2( event ) {
if(walking === 2){
	var key_code = event.keyCode;
	if( key_code === 40 ) alert(stageX)
	if( key_code === 38 ) alert(fun)
if(stageX > rightend) {
	if( key_code === 39 ) {
        if( ws = 5 ) stageX -= 5;
        if( ws =  10 ) stageX -= 5;
        }
}
if(stageX < leftend) {
	if( key_code === 37 ) {
        if( ws = 5 ) stageX += 5;
        if( ws = 10 ) stageX += 5;
        }
        }
	document.getElementById( 'img' ).style.top = stageY + "px";
	document.getElementById( 'img' ).style.left = stageX + "px";
}
}

function stagelink() {
SHL = stageX + 1440;
document.getElementById( 'img' ).style.left = stageX + "px";
document.getElementById( 'img2' ).style.left = SHL + "px";
document.getElementById( 'img3' ).style.left = SHL + 1440 + "px";
document.getElementById( 'img4' ).style.left = SHL + 2880 + "px";
document.getElementById( 'hidetxt' ).style.left = stageX + "px";
document.getElementById( 'ims' ).style.top = 10 + "px";
document.getElementById( 'ims' ).style.left = stageX + 100 + "px";
}
let intervalI = setInterval(stagelink, 1);
var fun = 1;

let intervaI = setInterval(ee8, 1);


function ee8() {
if( fun === 1 ) {
document.getElementById( 'eye' ).style.display = 'none';
document.getElementById( 'eye2' ).style.display = 'none';
if( stageX < -1330 ) fun = 2;
}
if( fun === 2 ) {
document.getElementById( 'eye' ).style.display = 'block';
document.getElementById( 'eye' ).style.left = stageX + 400 + "px";
document.getElementById( 'eye' ).style.top = 370 + "px";
document.getElementById( 'ims' ).style.display = 'none';
if( stageX > -80 ) fun = 3;
}
if( fun === 3 ){
document.getElementById( 'eye2' ).style.display = 'block';
document.getElementById( 'eye' ).style.left = stageX + 400 + "px";
document.getElementById( 'eye' ).style.top = 370 + "px";
document.getElementById( 'eye2' ).style.left = stageX + 2200 + "px";
document.getElementById( 'eye2' ).style.top = 370 + "px";
if( stageX < -1330 ) fun = 4;
}
if( fun === 4 ) {
document.getElementById( 'eye2' ).style.left = stageX + 2200 + "px";
document.getElementById( 'eye2' ).style.top = 370 + "px";
document.getElementById( 'eye' ).style.left = 0 + "px";
document.getElementById( 'eye' ).style.top = 0 + "px";
  const element = document.getElementById("eye");
  if (element.classList.contains("ti0")) {
    element.classList.remove("ti0");
    element.classList.add("ti1");}

const changeimg = document.getElementById("eye");
    changeimg.src = "eye.png";
if( stageX > -80 ) fun = 5;
}
if( fun === 5 ) {
document.getElementById( 'bread' ).style.display = 'block';
document.getElementById( 'bread' ).style.display = 'block';
document.getElementById( 'bread' ).style.top = 500 + "px";
document.getElementById( 'bread' ).style.left = stageX + 2200 + "px";
if( stageX < -1330 ) fun = 6;
}
if( fun === 6 ) {
document.getElementById( 'bread' ).style.display = 'block';
document.getElementById( 'bread' ).style.top = 500 + "px";
document.getElementById( 'bread' ).style.left = stageX + 2200 + "px";

}
}

function a(event) {
var key_code = event.keyCode;
if(key_code === 90) {
if(fun === 6) {
if(Math.sqrt( Math.pow( stageX+1800-x, 2 ) + Math.pow( 400-y, 2 ) ) < 200) {
if(lr === 1) {
if(ws != 0) {
poteto();
fadeout();
ws = 0;
af();
}
}
}
if(Math.sqrt( Math.pow( stageX+2100-x, 2 ) + Math.pow( 400-y, 2 ) ) < 200) {
if(lr === -1) {
if(ws != 0) {
poteto3();
fadeout();
ws = 0;
af();
}
}
}
}
}
}

var nowtext = 3;

function Z1() {
var key_code = event.keyCode;
	if( key_code === 90 ) {
        ws = 0;
	if(nowtext === 3) {
	  nowtext -= 3;
        ws = 0;
	if(lr === -1) poteto3();
	if(lr === 1) poteto();
	} else {
	  nowtext += 1;
        if(nowtext === 3) {
	if(lr === 1) poteto2();
	if(lr === -1) poteto4();
        ws = 10;
        }
	}
	document.getElementById("area").innerText = array[nowtext];
        }
}


function Z() {
if(Math.sqrt( Math.pow( stageX+1100-x, 2 ) + Math.pow( 400-y, 2 ) ) < 200) {
if(lr === 1) {
Z1();
poteto();
}
}
if(Math.sqrt( Math.pow( stageX+1400-x, 2 ) + Math.pow( 400-y, 2 ) ) < 200) {
if(lr === -1) {
Z1();
poteto3();
}

}

}


var array = ['Eye"Hi,I am Isaac."', 'Stick"I am Stick."', 'He is nice guy.',''];

function poteto() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(0deg)' }, 
    { transform: 'rotate(15deg)' } 
  ], 
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(15deg)`;

}

function poteto2() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(15deg)' }, 
    { transform: 'rotate(0deg)' } 
  ], 
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(0deg)`;

}
function poteto3() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(0deg)' }, 
    { transform: 'rotate(-15deg)' } 
  ], 
  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(-15deg)`;
}

function poteto4() {
const image = document.getElementById('face2'); 

image.animate(
  [
    { transform: 'rotate(-15deg)' }, 
    { transform: 'rotate(0deg)' } 
  ], 

  {
    fill: 'backwards', 
    duration: 250,  
  },
);
const image2 = document.getElementById('face2'); 
image2.style.transform = `rotate(0deg)`;
}

function af() {
let timerid = setInterval( ()=>{

  if( (audio.volume - 0.1) <= 0 ){
    audio.volume = 0;
    audio.pause();
audio.currentTime = 0; 
    clearInterval(timerid); 
  }

  else{
    audio.volume -= 0.1;
  }
}
, 200); 
}
