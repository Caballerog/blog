import { Iterator } from './iterator.interface';

export interface Aggregator {
  getIterator(): Iterator<string>;
  getReverseIterator(): Iterator<string>;
}
