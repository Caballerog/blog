function anyFunction() {
    console.log("any function");
    console.log(this === global);
}

const user = {
    name: 'Carlos Caballero',
    anyFunction: anyFunction,
    otherFunction: function () {
        console.log(this === global);
    }
}

anyFunction(); // Prints true because "this" referes to global object
user.anyFunction()  // Prints false because now “this” refers to user object instead of global object.
const fun1 = user.otherFunction;
fun1() // Prints true as this method is invoked as a simple function.
user.otherFunction()  // Prints false on console as otherFunction is invoked as a object’s method