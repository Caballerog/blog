import { Client1 } from './client1';
import { Client2 } from './client2';

const client1 = new Client1();
console.log(
  `Batman: ${client1.showHero('batman')}
Spiderman: ${client1.showHero('spiderman')}
`
);

const client2 = new Client2();
console.log(
  `Batman: ${client2.showHero('batman')}
Spiderman: ${client2.showHero('spiderman')}
`
);
