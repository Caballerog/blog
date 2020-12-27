import { AbstractFactory } from "./abstract-factory";
import { AbstractProductA } from "./abstract-productA";
import { AbstractProductB } from "./abstract-productB";
import { ConcreteProductA2 } from "./concrete-productA2";
import { ConcreteProductB2 } from "./concrete-productB2";

export class ConcreteFactory2 implements AbstractFactory {
  public createProductA(): AbstractProductA {
    return new ConcreteProductA2();
  }

  public createProductB(): AbstractProductB {
    return new ConcreteProductB2();
  }
}
