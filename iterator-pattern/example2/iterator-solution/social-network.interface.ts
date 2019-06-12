import { ProfileIterator } from './profile-iterator.interface';

export interface SocialNetwork {
  createFriendsIterator(profileEmail: string): ProfileIterator;
  createCoworkersIterator(profileEmail: string): ProfileIterator;
}
