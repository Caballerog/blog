import { WordsCollection } from './words-collection';

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const iterator = collection.getIterator();

console.log('Straight traversal:');
while (!iterator.hasMoreElements()) {
  console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
const reverseIterator = collection.getReverseIterator();
while (!reverseIterator.hasMoreElements()) {
  console.log(reverseIterator.next());
}
