import { Product } from "./product.interface";

export class Kebab implements Product {
    public operation(): string {
        return 'Kebab: Operation';
    }
}