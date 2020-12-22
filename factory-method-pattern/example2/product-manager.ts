import { Burger } from "./burger.model";
import { Kebab } from "./kebab.model";
import { PRODUCT_TYPE } from "./product-type.enum";
import { Pizza } from "./pizza.model";

export class ProductManager {
  constructor() {}
  createProduct(type): Product {
    switch (type) {
      case PRODUCT_TYPE.PIZZA:
        return new Pizza();
      case PRODUCT_TYPE.KEBAB:
        return new Kebab();
      case PRODUCT_TYPE.BURGER:
        return new Burger();
      default:
        throw new Error("Error: Product invalid!");
    }
  }
}
