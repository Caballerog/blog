function calculate() {
  const number1 = parseInt(window.document.getElementById('number1').value);
  const number2 = parseInt(window.document.getElementById('number2').value);
  const div = window.document.getElementById('result');
  const sum = number1 + number2;
  const substract = number1 - number2;
  const multiplication = number1 * number2;
  const division = number1 / number2;
  const rest = number1 % number2;
  const doubleNumber1 = number1 * 2;
  const doubleNumber2 = number2 * 2;
  div.innerHTML = number1 + ' + ' + number2 + ' is: ' + sum + '<br />';
  div.innerHTML += number1 + ' - ' + number2 + ' is: ' + substract + '<br />';
  div.innerHTML +=
    number1 + ' * ' + number2 + ' is: ' + multiplication + '<br />';
  div.innerHTML += number1 + ' / ' + number2 + ' is: ' + division + '<br />';
  div.innerHTML +=
    'Rest of ' + number1 + ' / ' + number2 + ' is: ' + rest + '<br />';
  div.innerHTML += 'Double of ' + number1 + ' is: ' + doubleNumber1 + '<br />';
  div.innerHTML += 'Double of ' + number2 + ' is: ' + doubleNumber2;
}
