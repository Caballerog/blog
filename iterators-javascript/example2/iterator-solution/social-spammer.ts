import { SocialNetwork } from './social-network.interface';

export class SocialSpammer {
  public network: SocialNetwork;

  public constructor(network: SocialNetwork) {
    this.network = network;
  }

  public sendSpamToFriends(profileEmail: string, message: string): void {
    console.log('\nIterating over friends (custom)...\n');
    const iterator = this.network.createFriendsIterator(profileEmail);
    while (iterator.hasNext()) {
      const profile = iterator.next();
      this.sendMessage(profile.email, message);
    }

    console.log('\nIterating over friends (native)...\n');
    for (const profile of this.network.createNativeIterator(
      'friends',
      profileEmail
    )) {
      this.sendMessage(profile.email, message);
    }
  }

  public sendSpamToCoworkers(profileEmail: string, message: string): void {
    console.log('\nIterating over coworkers (custom)...\n');
    const iterator = this.network.createCoworkersIterator(profileEmail);
    while (iterator.hasNext()) {
      const profile = iterator.next();
      this.sendMessage(profile.email, message);
    }
    console.log('\nIterating over coworkes (native)...\n');
    for (const profile of this.network.createNativeIterator(
      'coworkers',
      profileEmail
    )) {
      this.sendMessage(profile.email, message);
    }
  }

  private sendMessage(email: string, message: string): void {
    console.log(
      "Sent message to: '" + email + "'. Message body: '" + message + "'"
    );
  }
}
