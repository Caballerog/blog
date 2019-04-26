let posX = 476;
let posY = 220;

document.addEventListener("keydown", moveBall);

function moveBall(e) {
  const ball = document.getElementById("ball");
  const speed = 20;

  if (e.key === "ArrowLeft") {
    posX -= speed;
    ball.style.left = posX + "px";
  } else if (e.key === "ArrowUp") {
    posY -= speed;
    ball.style.top = posY + "px";
  } else if (e.key === "ArrowRight") {
    posX += speed;
    ball.style.left = posX + speed + "px";
  } else if (e.key === "ArrowDown") {
    posY += speed;
    ball.style.top = posY + speed + "px";
  } else if (e.keyCode === 32) {
    console.log("pium");
    shootBall();
  }

  if (isOutOfLimits()) {
    respawn();
  }
}

function shootBall() {
  if (/*TODO*/) {
    /*TODO*/
  } else {
   /*TODO*/
  }
}

function isOutOfLimits() {
  return isOutOfLimitsHorizontal() || isOutOfLimitsVertical();
}

function isOutOfLimitsVertical() {
  return /*TODO*/;
}

function isOutOfLimitsHorizontal() {
  return /*TODO*/;
}

function respawn() {
  ball.style.left = 476 + "px";
  ball.style.top = 220 + "px";
  posX = 476;
  posY = 220;
}
