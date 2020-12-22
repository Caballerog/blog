import { Product } from "./product.interface";

export class ConcreteProduct1 implements Product {
  public operation(): string {
    return "ConcreteProduct1: Operation";
  }
}
