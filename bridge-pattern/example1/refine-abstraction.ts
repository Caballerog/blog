// Esta es una versión refinada de la abstracción.
import { Abstraction } from './abstraction';

export class RefinedAbstraction extends Abstraction {
    operation(): void {
        console.log('RefinedAbstraction: operation');
        this.implementor.operationImplementation();
    }
}
