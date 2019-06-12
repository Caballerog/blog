import { DevToIterator } from './dev-to-iterator';
import { Profile } from '../profile.class';
import { ProfileIterator } from '../profile-iterator.interface';
import { SocialNetwork } from '../social-network.interface';

export class DevTo implements SocialNetwork {
  private contacts: Array<Profile>;

  constructor(cache: Array<Profile>) {
    this.contacts = cache || [];
  }

  public requestContactInfoFromDevToInAPI(profileEmail: string): Profile {
    // Here would be a POST request to one of the DevTo API endpoints.
    console.log(`DevTo: Loading profile ${profileEmail} over the network...`);
    // ...and return test data.
    return this.findContact(profileEmail);
  }

  public requestRelatedContactsFromDevToInAPI(
    profileEmail: string,
    contactType: string
  ): Array<string> {
    // Here would be a POST request to one of the DevTo API endpoints.
    console.log(
      `DevTo: Loading ${contactType} list of ${profileEmail} over the network...`
    );
    // ...and return test data.
    const profile = this.findContact(profileEmail);
    return profile ? profile.getContactsByType(contactType) : null;
  }

  private findContact(profileEmail: string): Profile {
    return this.contacts.find(profile => profile.email === profileEmail);
  }

  public createFriendsIterator(profileEmail: string): ProfileIterator {
    return new DevToIterator(this, 'friends', profileEmail);
  }
  public createCoworkersIterator(profileEmail: string): ProfileIterator {
    return new DevToIterator(this, 'coworkers', profileEmail);
  }
}
