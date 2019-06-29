import { Component } from './component.interface';
import { ConcreteComponent } from './concrete-component';
import { ConcreteDecoratorA } from './concrete-decorator-a';
import { ConcreteDecoratorB } from './concrete-decorator-b';
import { ConcreteDecoratorC } from './concrete-decorator-c';

function clientCode(component: Component) {
  // ...
  console.log(`RESULT: ${component.operation()}`);
  // ...
}

const simple = new ConcreteComponent();
console.log("Client: I've got a simple component:");
clientCode(simple);
console.log('');

const decoratorA = new ConcreteDecoratorA(simple);
const decoratorB = new ConcreteDecoratorA(simple);
const decoratorC = new ConcreteDecoratorA(simple);

const decoratorBA = new ConcreteDecoratorB(decoratorA);
const decoratorCA = new ConcreteDecoratorC(decoratorA);
const decoratorCBA = new ConcreteDecoratorC(decoratorBA);

console.log("Client: Now I've got a decorated component:");
clientCode(decoratorA);
clientCode(decoratorB);
clientCode(decoratorC);
clientCode(decoratorBA);
clientCode(decoratorCA);
clientCode(decoratorCBA);
