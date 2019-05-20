function Dog(name, job) {
    this.name = name;
    this.job = job;
}
Dog.prototype.displayName = function () {
    console.log(`Dog:: ${this.name} - ${this.job}`);
}


const turbot = new Dog('Turbot', 'Police');
const rubble = new Dog('Rubble', 'Worker');
turbot.displayName(); // Prints Turbot info
rubble.displayName(); // Prints Rubble info

turbot.displayName.call(rubble); // Here we are setting value of this to be rubble object
//Prints Rubble info