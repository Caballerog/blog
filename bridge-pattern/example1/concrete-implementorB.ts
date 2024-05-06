// Otra implementación concreta de Implementor.
import { Implementor } from './implementor';

export class ConcreteImplementorB implements Implementor {
    operationImplementation(): void {
        console.log("ConcreteImplementorB operation implementation.");
    }
}
