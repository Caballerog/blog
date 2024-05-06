// Esta es una implementación concreta de Implementor.
import { Implementor } from './implementor';

export class ConcreteImplementorA implements Implementor {
    operationImplementation(): void {
        console.log("ConcreteImplementorA operation implementation.");
    }
}
