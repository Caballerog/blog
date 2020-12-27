import { AbstractFactory } from "./abstract-factory";
import { AbstractProductA } from "./abstract-productA";
import { AbstractProductB } from "./abstract-productB";
import { ConcreteProductA1 } from "./concrete-productA1";
import { ConcreteProductB1 } from "./concrete-productB1";

export class ConcreteFactory1 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA1();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB1();
  }
}
