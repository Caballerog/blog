import { AbstractProductA } from "./abstract-productA";

export class ConcreteProductA2 implements AbstractProductA {
  public usefulFunctionA(): string {
    return "The result of the product A2.";
  }
}
