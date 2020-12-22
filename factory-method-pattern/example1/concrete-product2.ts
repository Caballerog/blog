import { Product } from "./product.interface";

export class ConcreteProduct2 implements Product {
  public operation(): string {
    return "ConcreteProduct2: Operation";
  }
}
