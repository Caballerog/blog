import { FacadeSystem1 } from './system1/facade-system1';
import { FacadeSystem2 } from './system2/facade-system2';

export class Facade {
  private facadeSystem1 = new FacadeSystem1();
  private facadeSystem2 = new FacadeSystem2();

  methodClient1() {
    console.log('\n...methodClient1\n');
    this.facadeSystem1.methodA2();
    this.facadeSystem1.methodB();
    this.facadeSystem2.methodC();
    this.facadeSystem2.methodD();
  }

  methodClient2() {
    console.log('\n...methodClient2\n');
    this.facadeSystem1.methodA();
    this.facadeSystem2.methodC3();
    this.facadeSystem2.methodC();
  }
}
