function cipher(text, shift) {
  var cipher = '';
  shift = shift % 26;
  for (var i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      if (text.charCodeAt(i) + shift > 90) {
        cipher = cipher.concat(
          String.fromCharCode(text.charCodeAt(i) + shift - 26),
        );
      } else {
        cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) + shift));
      }
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      if (text.charCodeAt(i) + shift > 122) {
        cipher = cipher.concat(
          String.fromCharCode(text.charCodeAt(i) + shift - 26),
        );
      } else {
        cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) + shift));
      }
    } else {
      // blank space
      cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) + shift));
    }
  }
  return cipher.toString();
}

function decipher(text, shift) {
  var decipher = '';
  shift = shift % 26;
  for (var i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
      if (text.charCodeAt(i) - shift < 65) {
        decipher = decipher.concat(
          String.fromCharCode(text.charCodeAt(i) - shift + 26),
        );
      } else {
        decipher = decipher.concat(
          String.fromCharCode(text.charCodeAt(i) - shift),
        );
      }
    } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
      if (text.charCodeAt(i) - shift < 97) {
        decipher = decipher.concat(
          String.fromCharCode(text.charCodeAt(i) - shift + 26),
        );
      } else {
        decipher = decipher.concat(
          String.fromCharCode(text.charCodeAt(i) - shift),
        );
      }
    } else {
      // blank space
      decipher = decipher.concat(
        String.fromCharCode(text.charCodeAt(i) - shift),
      );
    }
  }
  return decipher.toString();
}

console.assert(
  cipher('Hello World', 1) === 'Ifmmp!Xpsme',
  `${cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
);
console.assert(
  decipher(cipher('Hello World', 3), 3) === 'Hello World',
  `${decipher(cipher('Hello World', 3), 3)} === 'Hello World'`,
);
