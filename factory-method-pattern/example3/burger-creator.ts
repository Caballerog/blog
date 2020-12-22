import { Burger } from "./burger.model";
import { Creator } from "./creator";
import { Product } from "./product.interface";

export class BurgerCreator extends Creator {
  public factoryMethod(): Product {
    return new Burger();
  }
}
