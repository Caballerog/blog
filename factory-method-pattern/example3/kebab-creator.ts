import { Creator } from "./creator";
import { Kebab } from "./kebab.model";
import { Product } from "./product.interface";

export class KebabCreator extends Creator {
    public factoryMethod(): Product {
        return new Kebab();
    }
}