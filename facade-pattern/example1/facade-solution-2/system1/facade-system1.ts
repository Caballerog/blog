import { ClassA } from './classA';
import { ClassA2 } from './classA2';
import { ClassB } from './classB';

export class FacadeSystem1 {
  private a = new ClassA();
  private a2 = new ClassA2();
  private b = new ClassB();

  methodA2() {
    this.a2.methodA2();
  }
  methodA() {
    this.a.methodA();
  }
  methodB() {
    this.b.methodB();
  }
}
