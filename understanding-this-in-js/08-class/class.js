class Dog {
    constructor(name, job) {
        this.name = name;
        this.job = job;
        this.age = 0;
    }

    displayName() {
        console.log(`Name: ${this.name}`);

        function innerDisplay() {
            console.log(`Job: ${this.job}`);
        }
        innerDisplay(); // undefined
        innerDisplay.apply(this); // Job: Police
    }
}

const turbot = new Dog("Turbo", "Police");
turbot.displayName();