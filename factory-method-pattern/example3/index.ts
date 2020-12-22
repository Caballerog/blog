import { BurgerCreator } from "./burger-creator";
import { Creator } from "./creator";
import { KebabCreator } from "./kebab-creator";
import { PizzaCreator } from "./pizza-creator";

function client(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

const pizzaCreator = new PizzaCreator();
const burgerCreator = new BurgerCreator();
const kebabCreator = new KebabCreator();


console.log('App: Launched with the PizzaCreator');
client(pizzaCreator);

console.log('----------');

console.log('App: Launched with the BurgerCreator');
client(burgerCreator);