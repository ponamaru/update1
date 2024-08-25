document.write( '<img src="無題.png" id="ims" width="800">' );
document.write( '<div class="fadein2"><img src="black2.png" id="fadein" class="fadein" width="120%" height="100%"></div>' );
document.write( '<img src="black2.png" id="black" class="op0" width="120%" height="100%">' );
document.write( '<img src="stick.png" id="stickbody" width="600">' );
document.write( '<img src="stick.png" id="leftleg" class="leftleg" width="600">' );
document.write( '<img src="stick.png" id="rightleg" class="rightleg" width="600">' );
document.write( '<div id="stickface" class="item2"><div class="item rotateX" id="face2" width="600"><img src="stickhead.png" id="stickhead" type="file1" class="red" width="600"><div class="re-wrap" id="stickeye3"><img src="stickeye3.png" id="stickeye" class="re" width="600"></div><img src="mouth.png" id="stickmouth" class="op0" width="600"></div></div>' );

var y = 300;
var x = 500;
var ws = 10;
var stageloop = 0;
var stageX = 200;
var stageY = 0;
var SHL = stageX + 1440;
var walking = 2;

  fadein(); 

function bodylink() {

document.getElementById( 'stickhead' ).style.top = y + "px";
document.getElementById( 'stickhead' ).style.left = x + "px";
    
document.getElementById( 'stickeye3' ).style.top = y -40 + "px";
document.getElementById( 'stickeye3' ).style.left = x + "px";

document.getElementById( 'stickmouth' ).style.top = y -30 + "px";
if(lr === 1)document.getElementById( 'stickmouth' ).style.left = x +9 + "px";
if(lr === -1)document.getElementById( 'stickmouth' ).style.left = x -25 + "px";
	
document.getElementById( 'stickbody' ).style.top = y -30 + "px";
document.getElementById( 'stickbody' ).style.left = x -15 + "px";

document.getElementById( 'leftleg' ).style.top = y +40 + "px";
document.getElementById( 'leftleg' ).style.left = x -15 + "px";

document.getElementById( 'rightleg' ).style.top = y +40 + "px";
document.getElementById( 'rightleg' ).style.left = x -15 + "px";
}

let intervalID = setInterval(bodylink);

function mouthClass() {
const facetext = array[nowtext];
const serifName = facetext.includes('Stick"');
if(serifName === true) {
  const mouth = document.getElementById("stickmouth");
    mouth.classList.remove("op0");
    mouth.classList.add("mouthM");
setTimeout(function() {
    const mouth = document.getElementById("stickmouth");
    mouth.classList.remove("mouthM");
    mouth.classList.add("op0");
}, 2000);
}else{
  const mouth = document.getElementById("stickmouth");
    mouth.classList.remove("mouthM");
    mouth.classList.add("op0");
}
}

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

addEventListener( "keydown", keydownfunc1 );

function keydownfunc1( event ) {
	var key_code = event.keyCode;
if( key_code === 37 ) {
if(ws != 0) {
lr = -1;
cos3(); cos(); 
document.getElementById( 'stickhead' ).style.left = x + "px";
if( motion != 1 ) {
motion = 1;
}
}
}
if( key_code === 39 ) {
if(ws != 0) {
lr = 1;
cos4();
cos2();
if( motion != 1 ) {
motion = 1;
}
}
}
if( key_code === 16 )  {
if(ws != 0) ws = 5;
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
if(ws != 0) {
motion = 0;
if(ws != 0) {
rrr();
}
}
}
if( key_code === 39 ) {
if(ws != 0) {
motion = 0;
if(ws != 0) {
rrr();
}
}
}
if( key_code === 16 )  {
if(ws != 0) {
ws = 10;
if(ws != 0) motion = 0;
}
}
}
const image = document.getElementById('rightleg');
const image2 = document.getElementById('leftleg'); 
const image3 = document.getElementById('rightleg'); 
const image4 = document.getElementById('leftleg'); 
const image5 = document.getElementById('stickface'); 
const image6 = document.getElementById('stickface'); 
const image7 = document.getElementById('stickface'); 

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
    { transform: 'translateY(6px)'},
    { transform: 'translateY(0px)'},
    { transform: 'translateY(-6px)'},
    { transform: 'translateY(0px)'}
  ], 
    
  {
    fill: 'backwards', 
    duration: 4000, 
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
var lr = -1;

addEventListener( "keydown", keydownfunc2 );

var jump = -1;

function makita () {
        y -= 5;
	if (element2.classList.contains("rlm")) {
	if(stageX < leftend) {
	if(lr === 1) stageX += 5;
	}
	if(stageX > rightend) {
	if(lr === 2) stageX -= 5;
	}
	  }
        jump += 1;
    if(jump > 47) {
    jump = 0;
    clearInterval(intervalmakita); 
    intervalmakita2 = setInterval(makita2, 5);
    }
}

 let intervalmakita;
let intervalmakita2;
function makita2() {
        y += 5;
	  if (element2.classList.contains("rlm")) {
	if(stageX < leftend) {
	if(lr === 1) stageX += 5;
	}
	if(stageX > rightend) {
	if(lr === 2) stageX -= 5;
	}
	  }
        jump += 1;
    if(jump > 47) {
    jump = -1;
    clearInterval(intervalmakita2);
    y = 300;
    }
}
 const element2 = document.getElementById("rightleg");

function keydownfunc2( event ) {
if(walking === 2){
	var key_code = event.keyCode;
	if( key_code === 38 ) {
    if(jump === -1) {
  intervalmakita = setInterval(makita, 5);
    }
} 
	if( key_code === 40 ) alert(stageX)
if(stageX > rightend) {
	if( key_code === 39 ) {
	if(ws != 0) {
        if( ws === 10 )stageX -= 10;
        if( ws === 5 )stageX -= 20;
        }
	}
}
if(stageX < leftend) {
	if(ws != 0) {
	if( key_code === 37 ) {
        if( ws === 10 )stageX += 10;
        if( ws === 5 )stageX += 20;
        }
	}
        }
if( key_code === 16 ) {
if(ws != 0) {
motion = 1;
if(stageX < leftend) {
if (lr === -1)stageX += 20;
}
if(stageX > rightend) {
if (lr === 1)stageX -= 20;
    }
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
document.getElementById( 'eye' ).style.left = stageX + 1400 + "px";
document.getElementById( 'eye' ).style.top = 400 + "px";
document.getElementById( 'area' ).style.left = 100 + "px";
document.getElementById( 'area' ).style.top = 600 + "px";
document.getElementById( 'ims' ).style.top = 10 + "px";
document.getElementById( 'ims' ).style.left = stageX + 100 + "px";
}
let intervalI = setInterval(stagelink, 1);

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
	mouthClass();
        }
}


function Z() {
if(Math.sqrt( Math.pow( stageX+1100-x, 2 ) + Math.pow( 400-y, 2 ) ) < 200) {
if(lr === 1) {
Z1();
}
}
if(Math.sqrt( Math.pow( stageX+1400-x, 2 ) + Math.pow( 400-y, 2 ) ) < 200) {
if(lr === -1) {
Z1();
}

}

}


var array = ['Eye"Hi,I am Isaac."', 'Stick"I am Stick."', 'He is nice guy.',''];
addEventListener( "keydown", Z );


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
