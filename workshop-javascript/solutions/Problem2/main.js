let randomNumber;
let life;
function start() {
  configure();
  play();
}
function configure() {
  randomNumber = parseInt(Math.random() * 6) + 1;
  life = 3;
}
function play() {
  let correctNumber = false;
  do {
    let n = prompt("Adivina el numero:");
    if (n == randomNumber) {
      correctNumber = true;
    }
    --life;
  } while (!correctNumber && life > 0);
  if (correctNumber) {
    document.write("Correcto lo adivinastes");
  } else {
    document.write("Se te agotaron los intentos");
  }
}
