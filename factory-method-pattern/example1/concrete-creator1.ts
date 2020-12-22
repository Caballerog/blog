import { ConcreteProduct1 } from "./concrete-product1";
import { Creator } from "./creator";
import { Product } from "./product.interface";

export class ConcreteCreator1 extends Creator {
  protected factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}
