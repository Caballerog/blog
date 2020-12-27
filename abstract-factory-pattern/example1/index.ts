import { AbstractFactory } from "./abstract-factory";
import { ConcreteFactory1 } from "./concrete-factory1";
import { ConcreteFactory2 } from "./concrete-factory2";

function clientCode(factory: AbstractFactory) {
  const productA = factory.createProductA();
  const productB = factory.createProductB();

  console.log(productA.usefulFunctionA());
  console.log(productB.usefulFunctionB());
}

console.log("Client: Testing client code with ConcreteFactory1");
clientCode(new ConcreteFactory1());

console.log("----------------");

console.log("Client: Testing the same client code with ConcreteFactory2");
clientCode(new ConcreteFactory2());
