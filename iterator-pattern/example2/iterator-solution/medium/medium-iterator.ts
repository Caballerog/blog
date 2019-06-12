import { Medium } from './medium.class';
import { Profile } from '../profile.class';
import { ProfileIterator } from '../profile-iterator.interface';

export class MediumIterator implements ProfileIterator {
  private medium: Medium;
  private type: string;
  private email: string;
  private currentPosition = 0;
  private emails: string[] = [];
  private contacts: Profile[] = [];

  public constructor(medium: Medium, type: string, email: string) {
    this.medium = medium;
    this.type = type;
    this.email = email;
  }

  private lazyLoad(): void {
    if (this.emails.length === 0) {
      const profiles = this.medium.requestRelatedContactsFromMediumInAPI(
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
      friendContact = this.medium.requestContactInfoFromMediumInAPI(
        friendEmail
      );
      this.contacts.splice(this.currentPosition, 1, friendContact);
    }
    this.currentPosition++;
    return friendContact;
  }

  public reset(): void {
    this.currentPosition = 0;
  }
}
