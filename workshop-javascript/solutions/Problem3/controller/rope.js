document.addEventListener("keypress", onKeyDownHandler, false);

const rope = document.getElementById("elementMov");
let ropePosition = 310;
const limitLeft = 310 - 150;
const limitRight = 310 + 150;
const pixels = 20;

function left() {
  if (ropePosition > limitLeft) {
    ropePosition = ropePosition - pixels;

    document.getElementById("elementMov").style.left = ropePosition + "px";
    return;
  }
  alert("WIN 1 PLAYER");
}

function right() {
  if (ropePosition < limitRight) {
    ropePosition = ropePosition + pixels;
    document.getElementById("elementMov").style.left = ropePosition + "px";
    return;
  }
  alert("WIN 2 PLAYER");
}

function onKeyDownHandler() {
  const key = event.key;
  const MOVE_LEFT = "a";
  const MOVE_RIGHT = "l";

  if (key === MOVE_LEFT) {
    console.log("move left");
    left();
  } else if (key === MOVE_RIGHT) {
    console.log("move right");
    right();
  }
}