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
  if (posX < 476) {
    posX -= 150;
    ball.style.left = posX + "px";
  } else {
    posX += 150;
    ball.style.left = posX + "px";
  }
}

function isOutOfLimits() {
  return isOutOfLimitsHorizontal() || isOutOfLimitsVertical();
}

function isOutOfLimitsVertical() {
  return posY <= 0 || posY >= 440;
}

function isOutOfLimitsHorizontal() {
  return posX <= 0 || posX >= 950;
}

function respawn() {
  ball.style.left = 476 + "px";
  ball.style.top = 220 + "px";
  posX = 476;
  posY = 220;
}
