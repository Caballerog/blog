import { DevTo } from './dev-to.class';
import { Profile } from '../profile.class';
import { ProfileIterator } from '../profile-iterator.interface';

export class DevToIterator implements ProfileIterator {
  private devTo: DevTo;
  private type: string;
  private email: string;
  private currentPosition = 0;
  private emails: string[] = [];
  private contacts: Profile[] = [];

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

  public getNext(): Profile {
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

  public reset(): void {
    this.currentPosition = 0;
  }
}
