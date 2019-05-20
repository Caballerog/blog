// Option bad

function Dog(name, job) {
    this.name = name;
    this.job = job;
    this.age = 0;

    this.displayName = function () {
        console.log(`Name: ${this.name} ${this.job}`);
    }

    setInterval(function growUp() {
        this.age++; // this is growUp "this" value  
        console.log(this.age);
    }, 1000);
}

const turbot = new Dog("Turbo", "Police");