import { Profile } from './profile.class';

export interface ProfileIterator {
  hasNext(): boolean;
  getNext(): Profile;
  reset(): void;
}
