import { Profile } from './profile.class';

export interface ProfileIterator {
  hasNext(): boolean;
  next(): Profile;
  reset(): void;
}
