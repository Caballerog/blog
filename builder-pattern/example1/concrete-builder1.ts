import { Builder } from "./builder.interface";
import { Product } from "./product";

export class ConcreteBuilder1 implements Builder {
    private product: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    /**
     * Steps
     */
    public addPartA(): void {
        this.product.addPart('PartA1');
    }

    public addPartB(): void {
        this.product.addPart('PartB1');
    }

    public addPartC(): void {
        this.product.addPart('PartC1');
    }

    public removePartA(): void {
        this.product.removePart('PartA1');
    }

    public removePartB(): void {
        this.product.removePart('PartB1');
    }

    public removePartC(): void {
        this.product.removePart('PartC1');
    }

    public build(): Product {
        const result = this.product;
        this.reset();
        return result;
    }
}