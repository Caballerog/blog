function calculate() {
  const number1 = parseInt(window.document.getElementById("number1").value);
  const number2 = parseInt(window.document.getElementById("number2").value);
  const div = window.document.getElementById("result");
  const sum =/* TODO */;
  const substract =/* TODO */;
  const multiplication = /* TODO */;
  const division = /* TODO */;
  const rest = /* TODO */;
  const doubleNumber1 = /* TODO */;
  const doubleNumber2 = /* TODO */;
  div.innerHTML = number1 + " + " + number2 + " is: " + sum + "<br />";
  div.innerHTML += number1 + " - " + number2 + " is: " + substract + "<br />";
  div.innerHTML +=
    number1 + " * " + number2 + " is: " + multiplication + "<br />";
  div.innerHTML += number1 + " / " + number2 + " is: " + division + "<br />";
  div.innerHTML +=
    "Rest of " + number1 + " / " + number2 + " is: " + rest + "<br />";
  div.innerHTML +=
    "Double of " + number1 + " is: " + doubleNumber1 + "<br />";
  div.innerHTML += "Double of " + number2 + " is: " + doubleNumber2;
}