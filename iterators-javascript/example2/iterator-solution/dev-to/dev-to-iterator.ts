import { DevTo } from './dev-to.class';
import { Profile } from '../profile.class';
import { ProfileIterator } from '../profile-iterator.interface';

export abstract class DevToIterator {
  protected devTo: DevTo;
  protected type: string;
  protected email: string;
  protected currentPosition = 0;
  protected emails: string[] = [];
  protected contacts: Profile[] = [];

  public constructor(devTo: DevTo, type: string, email: string) {
    this.devTo = devTo;
    this.type = type;
    this.email = email;
  }

  private lazyLoad(): void {
    if (this.emails.length === 0) {
      const profiles = this.devTo.requestRelatedContactsFromDevToInAPI(
        this.email,
        this.type
      );
      for (const profile of profiles) {
        this.emails.push(profile);
        this.contacts.push(null);
      }
    }
  }

  public hasNext(): boolean {
    this.lazyLoad();
    return this.currentPosition < this.emails.length;
  }

  public reset(): void {
    this.currentPosition = 0;
  }
}

export class NativeDevToIterator extends DevToIterator
  implements Iterator<Profile> {
  public next(): IteratorResult<Profile> {
    if (!this.hasNext()) {
      return { value: null, done: true };
    }
    const friendEmail = this.emails[this.currentPosition];
    let friendContact = this.contacts[this.currentPosition];
    if (!friendContact) {
      friendContact = this.devTo.requestContactInfoFromDevToInAPI(friendEmail);
      this.contacts.splice(this.currentPosition, 1, friendContact);
    }
    const result = { value: friendContact, done: !this.hasNext() };
    this.currentPosition++;
    return result;
  }
}

export class CustomDevToIterator extends DevToIterator
  implements ProfileIterator {
  public next(): Profile {
    if (!this.hasNext()) {
      return null;
    }

    const friendEmail = this.emails[this.currentPosition];
    let friendContact = this.contacts[this.currentPosition];
    if (!friendContact) {
      friendContact = this.devTo.requestContactInfoFromDevToInAPI(friendEmail);
      this.contacts.splice(this.currentPosition, 1, friendContact);
    }
    this.currentPosition++;
    return friendContact;
  }
}
