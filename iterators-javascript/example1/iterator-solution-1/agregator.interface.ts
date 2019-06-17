import { CustomIterator } from './iterator.interface';

export interface Aggregator {
  getIterator(): CustomIterator<string>;
  getReverseIterator(): CustomIterator<string>;
}
