import { Profile } from './profile.class';
import { ProfileIterator } from './profile-iterator.interface';

export interface SocialNetwork {
  createFriendsIterator(profileEmail: string): ProfileIterator;
  createCoworkersIterator(profileEmail: string): ProfileIterator;
  createNativeIterator(type: string, profileEmail: string): Iterable<Profile>;
}
