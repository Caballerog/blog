import {
  CustomAlphabeticalOrderIterator,
  NativeAlphabeticalOrderIterator
} from './alphabetical-order-iterator';

import { Aggregator } from './agregator.interface';
import { CustomIterator } from './iterator.interface';

export class WordsCollection implements Aggregator, Iterable<string> {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public getCount(): number {
    return this.items.length;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }

  [Symbol.iterator](): Iterator<string> {
    return new NativeAlphabeticalOrderIterator(this);
  }

  reverse(): Iterable<string> {
    return {
      [Symbol.iterator]: () => {
        return new NativeAlphabeticalOrderIterator(this, true);
      }
    };
  }

  public getIterator(): CustomIterator<string> {
    return new CustomAlphabeticalOrderIterator(this);
  }

  public getReverseIterator(): CustomIterator<string> {
    return new CustomAlphabeticalOrderIterator(this, true);
  }
}
