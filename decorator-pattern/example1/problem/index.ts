import { Component } from './component.interface';
import { ComponentA } from './component-a';
import { ComponentB } from './component-b';
import { ComponentBA } from './component-ba';
import { ComponentC } from './component-c';
import { ComponentCA } from './component-ca';
import { ComponentCBA } from './component-cba';

/**
 * The client code works with all objects using the Component interface. This
 * way it can stay independent of the concrete classes of components it works
 * with.
 */
function clientCode(component: Component) {
  // ...

  console.log(`RESULT: ${component.operation()}`);

  // ...
}

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple components but the other
 * decorators as well.
 */
const componentA = new ComponentA();
const componentB = new ComponentB();
const componentC = new ComponentC();
const componentBA = new ComponentBA();
const componentCA = new ComponentCA();
const componentCBA = new ComponentCBA();

console.log('Client: list of components:');
clientCode(componentA);
clientCode(componentB);
clientCode(componentC);
clientCode(componentBA);
clientCode(componentCA);
clientCode(componentCBA);
