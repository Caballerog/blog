import { Abstraction } from './abstraction';
import { ConcreteImplementorA } from './concrete-implementorA';
import { ConcreteImplementorB } from './concrete-implementorB';
import { RefinedAbstraction } from './refine-abstraction';

// La clase cliente que demuestra el uso del patrón Bridge
class Client {
    static main(): void {
        // Crear una implementación concreta
        const implementorA = new ConcreteImplementorA();
        const implementorB = new ConcreteImplementorB();

        // Crear una abstracción, configurándola con una implementación concreta
        let abstraction: Abstraction = new RefinedAbstraction(implementorA);
        abstraction.operation();

        // Cambiar la implementación de la abstracción
        abstraction = new RefinedAbstraction(implementorB);
        abstraction.operation();
    }
}

// Ejecutar la función main para demostrar el patrón Bridge
Client.main();
