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
    let character = text.charCodeAt(i) + shift;
    if (
      (text.charCodeAt(i) >= LETTER.a &&
        text.charCodeAt(i) <= LETTER.z &&
        text.charCodeAt(i) + shift > LETTER.z) ||
      (text.charCodeAt(i) >= LETTER.A &&
        text.charCodeAt(i) <= LETTER.Z &&
        text.charCodeAt(i) + shift > LETTER.Z)
    ) {
      character = text.charCodeAt(i) + shift - NUMBER_LETTERS;
    }
    if (
      (text.charCodeAt(i) >= LETTER.a &&
        text.charCodeAt(i) <= LETTER.z &&
        text.charCodeAt(i) + shift > LETTER.z &&
        !(text.charCodeAt(i) >= LETTER.a && text.charCodeAt(i) <= LETTER.z)) ||
      (text.charCodeAt(i) >= LETTER.A &&
        text.charCodeAt(i) <= LETTER.Z &&
        !(text.charCodeAt(i) + shift > LETTER.Z))
    ) {
      character = text.charCodeAt(i) + shift;
    }

    cipher = cipher.concat(String.fromCharCode(character));
  }
  return cipher.toString();
}

function decipher(text, shift) {
  let cipher = '';

  shift = shift % NUMBER_LETTERS;
  for (let i = 0; i < text.length; i++) {
    let character = text.charCodeAt(i) - shift;
    if (
      (text.charCodeAt(i) >= LETTER.a &&
        text.charCodeAt(i) <= LETTER.z &&
        text.charCodeAt(i) - shift < LETTER.a) ||
      (text.charCodeAt(i) >= LETTER.A &&
        text.charCodeAt(i) <= LETTER.Z &&
        text.charCodeAt(i) - shift < LETTER.A)
    ) {
      character = text.charCodeAt(i) - shift + NUMBER_LETTERS;
    }
    if (
      (text.charCodeAt(i) >= LETTER.a &&
        text.charCodeAt(i) <= LETTER.z &&
        !(text.charCodeAt(i) - shift < LETTER.a)) ||
      (text.charCodeAt(i) >= LETTER.A &&
        text.charCodeAt(i) <= LETTER.Z &&
        !(text.charCodeAt(i) - shift < LETTER.A))
    ) {
      character = text.charCodeAt(i) - shift;
    }
    cipher = cipher.concat(String.fromCharCode(character));
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
