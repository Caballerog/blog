// Interfaz Subject
interface Subject {
    operation(): void;
}

// RealSubject
class RealSubject implements Subject {
    operation(): void {
        console.log('RealSubject: Handling operation.');
    }
}

// Proxy
class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    operation(): void {
        // Different actions can be performed here
        this.realSubject.operation();
    }
}



console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
realSubject.operation()

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
proxy.operation();
