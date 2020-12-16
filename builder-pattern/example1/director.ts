import { Builder } from "./builder.interface";

export class Director {
    private builder: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildBasicObject(): void {
        this.builder.addPartA();
    }

    public buildFullObject(): void {
        this.builder.addPartA();
        this.builder.addPartB();
        this.builder.addPartC();
    }
}