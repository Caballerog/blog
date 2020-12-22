import { ConcreteProduct2 } from "./concrete-product2";
import { Creator } from "./creator";
import { Product } from "./product.interface";

export class ConcreteCreator2 extends Creator {
  protected factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}
