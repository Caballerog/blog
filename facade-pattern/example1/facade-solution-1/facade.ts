import { ClassA2 } from './system1/classA2';
import { ClassB } from './system1/classB';
import { ClassC } from '../problem/system2/classC';
import { ClassD } from '../problem/system2/classD';
import { ClassA } from '../problem/system1/classA';
import { ClassC3 } from '../problem/system2/classC3';

export class Facade {
  a = new ClassA();
  a2 = new ClassA2();
  b = new ClassB();
  c = new ClassC();
  c3 = new ClassC3();
  d = new ClassD();

  methodClient1() {
    console.log('\n...methodClient1\n');
    this.a2.methodA2();
    this.b.methodB();
    this.c.methodC();
    this.d.methodD();
  }

  methodClient2() {
    console.log('\n...methodClient2\n');
    this.a.methodA();
    this.c3.methodC3();
    this.c.methodC();
  }
}
