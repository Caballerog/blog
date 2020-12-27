import { AbstractProductB } from "./abstract-productB";

export class ConcreteProductB1 implements AbstractProductB {
  public usefulFunctionB(): string {
    return "The result of the product B1.";
  }
}
