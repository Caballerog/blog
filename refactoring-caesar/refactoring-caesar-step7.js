const NUMBER_LETTERS = 26;
const NO_ROTATION = 0;
const LETTER = {
  a: 65,
  z: 90,
  A: 97,
  Z: 122,
};

function isOutLowerCharacterCipher(text, position, shift) {
  return (
    text.charCodeAt(position) >= LETTER.a &&
    text.charCodeAt(position) <= LETTER.z &&
    text.charCodeAt(position) + shift > LETTER.z
  );
}
function isOutUpperCharacterCipher(text, position, shift) {
  return (
    text.charCodeAt(position) >= LETTER.A &&
    text.charCodeAt(position) <= LETTER.Z &&
    text.charCodeAt(position) + shift > LETTER.Z
  );
}

function isOutLowerCharacterDecipher(text, position, shift) {
  return (
    text.charCodeAt(position) >= LETTER.a &&
    text.charCodeAt(position) <= LETTER.z &&
    text.charCodeAt(position) - shift < LETTER.a
  );
}

function isOutUpperCharacterDecipher(text, position, shift) {
  return (
    text.charCodeAt(position) >= LETTER.A &&
    text.charCodeAt(position) <= LETTER.Z &&
    text.charCodeAt(position) - shift < LETTER.A
  );
}

function cipher(text, shift) {
  let cipher = '';
  shift = shift % NUMBER_LETTERS;
  for (let i = 0; i < text.length; i++) {
    const isOutAlphabet =
      isOutLowerCharacterCipher(text, i, shift) ||
      isOutUpperCharacterCipher(text, i, shift);
    const rotation = isOutAlphabet ? NUMBER_LETTERS : NO_ROTATION;
    const character = text.charCodeAt(i) + shift - rotation;

    cipher = cipher.concat(String.fromCharCode(character));
  }
  return cipher.toString();
}

function decipher(text, shift) {
  let cipher = '';

  shift = shift % NUMBER_LETTERS;
  for (let i = 0; i < text.length; i++) {
    const isOutAlphabet =
      isOutLowerCharacterDecipher(text, i, shift) ||
      isOutUpperCharacterDecipher(text, i, shift);
    const rotation = isOutAlphabet ? NUMBER_LETTERS : NO_ROTATION;
    const character = text.charCodeAt(i) - shift + rotation;
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
