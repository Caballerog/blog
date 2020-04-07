// Magic Number - https://medium.com/better-programming/clean-code-applied-to-javascript-part-2-variables-8302f01e539c
const NUMBER_LETTERS = 26;
const LETTER = {
  a: 65,
  z: 90,
  A: 97,
  Z: 122,
};

function cipher(text, shift) {
  let cipher = '';
  shift = shift % NUMBER_LETTERS;
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= LETTER.a && text.charCodeAt(i) <= LETTER.z) {
      if (text.charCodeAt(i) + shift > LETTER.z) {
        cipher = cipher.concat(
          String.fromCharCode(text.charCodeAt(i) + shift - NUMBER_LETTERS),
        );
      } else {
        cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) + shift));
      }
    } else if (
      text.charCodeAt(i) >= LETTER.A &&
      text.charCodeAt(i) <= LETTER.Z
    ) {
      if (text.charCodeAt(i) + shift > LETTER.Z) {
        cipher = cipher.concat(
          String.fromCharCode(text.charCodeAt(i) + shift - NUMBER_LETTERS),
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
  let cipher = '';

  shift = shift % NUMBER_LETTERS;
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= LETTER.a && text.charCodeAt(i) <= LETTER.z) {
      if (text.charCodeAt(i) - shift < LETTER.a) {
        cipher = cipher.concat(
          String.fromCharCode(text.charCodeAt(i) - shift + NUMBER_LETTERS),
        );
      } else {
        cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) - shift));
      }
    } else if (
      text.charCodeAt(i) >= LETTER.A &&
      text.charCodeAt(i) <= LETTER.Z
    ) {
      if (text.charCodeAt(i) - shift < LETTER.A) {
        cipher = cipher.concat(
          String.fromCharCode(text.charCodeAt(i) - shift + NUMBER_LETTERS),
        );
      } else {
        cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) - shift));
      }
    } else {
      cipher = cipher.concat(String.fromCharCode(text.charCodeAt(i) - shift));
    }
  }
  return cipher.toString();
}

console.assert(
  cipher('Hello World', 1) === 'Ifmmp!Xpsme',
  `${cipher('Hello World', 1)} === 'Ifmmp!Xpsme'`,
);
console.assert(
  decipher(cipher('Hello World', 3), 3) === 'Hello World',
  `${decipher(cipher('Hello World', 3), 3)} === 'Hello World'`,
);
