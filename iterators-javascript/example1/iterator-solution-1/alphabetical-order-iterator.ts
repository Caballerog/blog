import { CustomIterator } from './iterator.interface';
import { WordsCollection } from './words-collection';

export abstract class AlphabeticalOrderIterator {
  private collection: WordsCollection;
  protected position: number = 0;
  protected reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  public current(): string {
    return this.collection.getItems()[this.position];
  }

  public hasMoreElements(): boolean {
    if (this.reverse) {
      return this.position >= 0;
    }

    return this.position < this.collection.getCount();
  }
}

export class NativeAlphabeticalOrderIterator extends AlphabeticalOrderIterator
  implements Iterator<string> {
  public next() {
    const item = this.current();
    const result = { value: item, done: !this.hasMoreElements() };
    this.position += this.reverse ? -1 : 1;
    return result;
  }
}

export class CustomAlphabeticalOrderIterator extends AlphabeticalOrderIterator
  implements CustomIterator<string> {
  public next() {
    const item = this.current();
    this.position += this.reverse ? -1 : 1;
    return item;
  }
}
