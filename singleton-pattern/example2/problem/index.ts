import { Client1 } from './client1';
import { Client2 } from './client2';

const client1 = new Client1();
console.log(
  'DatabaseConnection ID:',
  client1.getUniqueIdentificatorConnection()
);

const client2 = new Client2();
console.log(
  'DatabaseConnection ID:',
  client2.getUniqueIdentificatorConnection()
);
