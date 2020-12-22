import { Product } from "./product.interface";

export class Pizza implements Product {
    public operation(): string {
        return 'Pizza: Operation';
    }
}