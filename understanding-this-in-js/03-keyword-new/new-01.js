function Dog() {
    //this context is not windows
    console.log('this is not a global scope')
    console.log(this === module.exports);
}

new Dog();
