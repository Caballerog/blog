import { Facade } from './facade';

class Client {
  facade = new Facade();
  methodClient1() {
    this.facade.methodClient1();
  }

  methodClient2() {
    this.facade.methodClient2();
  }
}

const client = new Client();
client.methodClient1();
client.methodClient2();
