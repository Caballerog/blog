function Dog(name, job) {
    this.name = name;
    this.job = job;

    this.displayName = function () {
        console.log(`this is in the Dog context:: ${this.name} ${this.job}`);
    }
}

const turbot = new Dog('Turbot', 'Police');
const rubble = new Dog('Rubble', 'Worker');
turbot.displayName();
rubble.displayName(); 