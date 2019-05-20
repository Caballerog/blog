/* Función de flecha invocada a través de los métodos call y apply
Dado que las funciones flecha no tienen su propio this, los métodos call() y apply() sólo pueden pasar parámetros. thisArg es ignorado:

*/

function Dog(name, job) {
    this.name = name;
    this.job = job;
    this.age = 0;

    this.add = function (a) {
        const f = v => v + this.age;
        return f(a);
    };

    this.addThruCall = function (a) {
        const f = v => v + this.age;
        const b = {
            age: 2
        };

        return f.call(b, a);
    }

    this.displayName = function () {
        console.log(`Name: ${this.name} ${this.job}`);
    }
}

const turbot = new Dog("Turbo", "Police");
console.log(turbot.add(1));         //  Prints 1
console.log(turbot.addThruCall(1)); // Prints 1 althoug you expect 2
