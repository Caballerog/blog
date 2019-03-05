import { FakeObject } from './interfaces/fake-object';
// Create a person
const person = FakeObject.createAPerson();

// Example 1: Violated the Demeter's Law
console.log(
  person
    .getHouse() // return an House's object
    .getAddress() // return an Address's object
    .getZipCode() // return a ZipCode Object
);

// Example 1: Not violate the Demeter's Law
console.log(person.getZipCode());

// Example 2: Violated the Demeter's Law
console.log(
  person
    .getHouse() // return an House's object
    .getAddress() // return an Address's object
    .getZipCode() === '56565656' // return a ZipCode Object
);

// Example 2: Not violate the Demeter's Law
console.log(person.isZipCode('56565656'));
