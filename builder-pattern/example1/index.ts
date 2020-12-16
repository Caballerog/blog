import { ConcreteBuilder1 } from './concrete-builder1';
import { Director } from './director';

function client(director: Director) {
    const builder = new ConcreteBuilder1();
    director.setBuilder(builder);

    console.log('A preconfigured basic object:');
    director.buildBasicObject();
    builder.build().showParts();

    console.log('A preconfigured full object:');
    director.buildFullObject();
    builder.build().showParts();

    // A custom object can be create without a Director class.
    console.log('Custom product:');
    builder.addPartA();
    builder.addPartC();
    builder.build().showParts();
}

const director = new Director();
client(director);
    