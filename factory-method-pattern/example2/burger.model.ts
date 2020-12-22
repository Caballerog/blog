import { Product } from "./product.interface";

export class Burger implements Product {
  public operation(): string {
    return "Burger: Results";
  }
}
