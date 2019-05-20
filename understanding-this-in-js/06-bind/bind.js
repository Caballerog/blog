function Dog(name, job) {
    this.name = name;
    this.job = job;
}
Dog.prototype.displayName = function () {
    console.log(`this is in the Dog context:: ${this.name} ${this.job}`);
}

const turbot = new Dog('Turbot', 'Police');
const rubble = new Dog('Rubble', 'Worker');
turbot.displayName();
rubble.displayName();

const newDisplayName = turbot.displayName.bind(rubble); // / Creates new function with value of “this” equals to rubble's object
newDisplayName();//Prints Turbo info