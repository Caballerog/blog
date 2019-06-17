import { WordsCollection } from './words-collection';

const collection = new WordsCollection();
collection.addItem('First');
collection.addItem('Second');
collection.addItem('Third');

const items = collection.getItems();
const elements = items.length;

console.log('Straight traversal:');
for (let i = 0; i <= elements; i++) {
  console.log(items[i]);
}

console.log('');
console.log('Reverse traversal:');
for (let i = elements; i > 0; i--) {
  console.log(items[i]);
}
