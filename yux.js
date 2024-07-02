document.write( '<div class="fadein2"><img src="black2.png" id="fadein" class="fadein" width="120%" height="100%"></div>' );
document.write( '<img src="black2.png" id="black" class="op0" width="120%" height="100%">' );
document.write( '<img src="stick.png" id="stickbody" width="600">' );
document.write( '<img src="stick.png" id="leftleg" class="leftleg" width="600">' );
document.write( '<img src="stick.png" id="rightleg" class="rightleg" width="600">' );
document.write( '<div id="stickface" class="item2"><div class="item rotateX" id="face2" width="600"><img src="stickhead.png" id="stickhead" type="file1" class="red" width="600"><div class="re-wrap" id="stickeye3"><img src="stickeye3.png" id="stickeye" class="re" width="600"></div></div></div>' );

var y = 300;
var x = 500;

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

addEventListener( "keydown", keydownfunc1 );

function keydownfunc1( event ) {
	var key_code = event.keyCode;
if( key_code === 40 ) {
if( motion != 1 ) {
motion = 1;
walk();
}
}
}

addEventListener( "keyup", keydownfunc1 );

function keyupfunc1( event ) {
	var key_code = event.keyCode;
if( key_code === 40 ) {
motion = 0;
image.finish();
}
}

function walk() {
const image = document.getElementById('rightleg'); // ロゴ画像

if (motion === 1) {
image.animate(
  // 途中の状態を表す配列
  [
    { transform: 'rotate(-15deg)'}, // 開始時の状態（左端）
    { transform: 'rotate(15deg)' },
    { transform: 'rotate(-15deg)'}
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
    duration: 1000, // 再生時間（1000ミリ秒）
    iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
  },
);
}
const image2 = document.getElementById('leftleg'); // ロゴ画像
if (motion === 1) {
image2.animate(
  // 途中の状態を表す配列
  [
    { transform: 'rotate(15deg)'}, // 開始時の状態（左端）
    { transform: 'rotate(-15deg)' },
    { transform: 'rotate(15deg)'}
  ], 
  // タイミングに関する設定
  {
    fill: 'backwards', // 再生前後の状態（再生前、開始時の状態を適用）
    duration: 1000, // 再生時間（1000ミリ秒）
    iterations: Infinity,  // アニメーションの繰り返し回数（ずっと繰り返す）
  },
);
}
}
