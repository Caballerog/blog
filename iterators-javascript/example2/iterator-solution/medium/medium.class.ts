import { CustomMediumIterator, NativeMediumIterator } from './medium-iterator';

import { Profile } from '../profile.class';
import { ProfileIterator } from '../profile-iterator.interface';
import { SocialNetwork } from '../social-network.interface';

export class Medium implements SocialNetwork {
  private contacts: Map<string, Profile>;

  constructor(cache: Array<Profile>) {
    this.contacts = new Map();
    if (cache) {
      for (const profile of cache) {
        this.contacts.set(profile.email, profile);
      }
    }
  }

  public requestContactInfoFromMediumInAPI(profileEmail: string): Profile {
    // Here would be a POST request to one of the Medium API endpoints.
    console.log(`Medium: Loading profile ${profileEmail} over the network...`);

    // ...and return test data.
    return this.findContact(profileEmail);
  }

  public requestRelatedContactsFromMediumInAPI(
    profileEmail: string,
    contactType: string
  ): Array<string> {
    // Here would be a POST request to one of the DevTo API endpoints.
    console.log(
      `Medium: Loading ${contactType} list of ${profileEmail} over the network...`
    );
    // ...and return test data.
    const profile = this.findContact(profileEmail);
    return profile ? profile.getContactsByType(contactType) : null;
  }

  private findContact(profileEmail: string): Profile {
    return this.contacts.get(profileEmail);
  }

  public createNativeIterator(type: string, profileEmail: string) {
    return {
      [Symbol.iterator]: () => {
        return new NativeMediumIterator(this, type, profileEmail);
      }
    };
  }

  public createFriendsIterator(profileEmail: string): ProfileIterator {
    return new CustomMediumIterator(this, 'friends', profileEmail);
  }
  public createCoworkersIterator(profileEmail: string): ProfileIterator {
    return new CustomMediumIterator(this, 'coworkers', profileEmail);
  }
}
