import * as inquirer from 'inquirer';

import { DevTo } from './dev-to/dev-to.class';
import { Medium } from './medium/medium.class';
import { Profile } from './profile.class';
import { SocialNetwork } from './social-network.interface';
import { SocialSpammer } from './social-spammer';

inquirer
  .prompt([
    {
      type: 'rawlist',
      name: 'network',
      message: 'What is your Social Network preferred?',
      choices: ['Dev.to', 'Medium']
    }
  ])
  .then(answers => {
    console.log(answers);
    const { network: networkSelected } = answers;
    const mockProfiles = createTestProfiles();
    const network: SocialNetwork =
      networkSelected === 'Dev.to'
        ? new DevTo(mockProfiles)
        : new Medium(mockProfiles);
    const spammer = new SocialSpammer(network);
    spammer.sendSpamToFriends(
      'ben@dev.to',
      "Hey! This is Ben's friend Jessi. Can you do me a favor and like this post [link]?"
    );
    spammer.sendSpamToCoworkers(
      'ben@dev.to',
      "Hey! This is Ben's boss Jess. Ben told me you would be interested in [link]."
    );
  });

function createTestProfiles(): Array<Profile> {
  return [
    new Profile({
      email: 'ben@dev.to',
      name: 'Ben Halpern',
      contacts: [
        'friends:jess@dev.to',
        'friends:mac@dev.to',
        'coworkers:ali@dev.to'
      ]
    }),
    new Profile({
      email: 'jess@dev.to',
      name: 'Jess Lee',
      contacts: ['friends:ben@dev.to', 'coworkers:ali@dev.to']
    }),
    new Profile({
      email: 'peter@dev.to',
      name: 'Peter Kim',
      contacts: ['coworkers:carlos@dev.to']
    }),
    new Profile({
      email: 'carlos@dev.to',
      name: 'Carlos Caballero',
      contacts: ['coworkers:peter@dev.to']
    }),
    new Profile({
      email: 'ali@dev.to',
      name: 'Ali Spittel',
      contacts: [
        'coworkers:ben@dev.to',
        'coworkers:jess@dev.to',
        'friends:mac@dev.to'
      ]
    }),
    new Profile({
      email: 'mac@dev.to',
      name: 'Mac Siri',
      contacts: ['friends:ben@dev.to', 'friends:ali@dev.to']
    })
  ];
}
