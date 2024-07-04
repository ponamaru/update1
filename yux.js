<html>
<img id="img" src="teststage.png" width="1450">
<img id="img2" src="teststage.png" width="1450">
<img id="img3" src="black2.png" width="1450">
<img id="img4" src="black2.png" width="1450">
<body bgcolor="#000000"></body>
<head>
    <script>
const audio = new Audio('マイクラにありそうな曲.mp3');
 
addEventListener('click', () => {
audio.play();
window.setInterval(bgm, 59000);
});
function bgm() {
    audio.play();
    }
    </script>
<script src="yux.js"></script>
</head>
<style>
#stickhead {
	position: absolute;
	top: 0;
	left: 0;
}
#stickeye3 {
	position: absolute;
	top: 0;
	left: 0;
}
#stickbody {
	position: absolute;
	top: 0;
	left: 0;
}
#leftleg {
	position: absolute;
	top: 0;
	left: 0;
}
#rightleg {
	position: absolute;
	top: 0;
	left: 0;
}
.fadeout {
  animation : fadeOut 1s;
  animation-fill-mode: both;
}
@keyframes fadeOut {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
html, body {
    overflow: hidden;
}
#fadein {
  z-index: 1;
object-fit: cover;
position: absolute;
top: 0;
left: 0;
}
#black {
  z-index: 2;
object-fit: cover;
position: absolute;
top: 0;
left: 0;
}
.fadein {
  animation : fadein 3s;
  animation-fill-mode: both;
}
@keyframes fadein {
  0% {
    opacity: 1 ;
  }
  100% {
    opacity: 0 ;
  }
}
.op0 {
opacity: 0;
}
.op1 {
opacity: 1;
}
#img {
position: absolute;
top: 0;
left: 0;
}
#img2 {
position: absolute;
top: 0;
left: 0;
}
#img3 {
position: absolute;
top: 0;
left: 0;
}
#img4 {
position: absolute;
top: 0;
left: 0;
}
#face2 {
position: absolute;
top: 0;
left: 0;
}
#stickeye3 {
animation: floatingw 4s ease-in-out infinite alternate-reverse;
}

    @keyframes floatingw {
      0% {
        transform: scaleY(1);
      }
      90% {
        transform: scaleY(1);
      }
      95% {
        transform: scaleY(0.1);
      }
      100% {
        transform: scaleY(1);
      }
}
</style>
    <p></p>
    <p></p>
</html>
