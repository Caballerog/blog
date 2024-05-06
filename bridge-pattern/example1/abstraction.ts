// Esta es la abstracción en el patrón Bridge.
import { Implementor } from './implementor';

export abstract class Abstraction {
    protected implementor: Implementor;

    constructor(implementor: Implementor) {
        this.implementor = implementor;
    }

    abstract operation(): void;
}
