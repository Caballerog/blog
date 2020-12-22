import { Creator } from "./creator";
import { Pizza } from "./pizza.model";
import { Product } from "./product.interface";

export class PizzaCreator extends Creator {
    public factoryMethod(): Product {
        return new Pizza();
    }
}