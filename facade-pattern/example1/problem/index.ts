import { ClassA2 } from './system1/classA2';
import { ClassB } from './system1/classB';
import { ClassC } from './system2/classC';
import { ClassD } from './system2/classD';
import { ClassA } from './system1/classA';
import { ClassC3 } from './system2/classC3';

const a = new ClassA();
const a2 = new ClassA2();
const b = new ClassB();
const c = new ClassC();
const c3 = new ClassC3();
const d = new ClassD();

function methodClient1() {
  console.log('\n...methodClient1\n');
  a2.methodA2();
  b.methodB();
  c.methodC();
  d.methodD();
}

function methodClient2() {
  console.log('\n...methodClient2\n');
  a.methodA();
  c3.methodC3();
  c.methodC();
}

methodClient1();
methodClient2();
