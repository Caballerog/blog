import { WordsCollection } from './words-collection';

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

console.log('Native Iterator');
for (const c of collection) {
  console.log(c);
}
console.log('');

console.log('Reverse Iterator');
for (const c of collection.reverse()) {
  console.log(c);
}
console.log('');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (iterator.hasMoreElements()) {
  console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.hasMoreElements()) {
  console.log(reverseIterator.next());
}
