import { Burger } from "./burger.model";
import { BurgerBuilder } from "./burger-builder";
import { BurgerDirector } from "./buger-director";

let burger: Burger;

const burgerType = Math.round(Math.random() * 6);
console.log('BurgerType: ', burgerType);

const burgerBuilder: BurgerBuilder = new BurgerBuilder();
const burgerDirector: BurgerDirector =  new BurgerDirector(burgerBuilder);


switch (burgerType) {
    case 1:
        burger = burgerDirector.serveRegularBurger();
        break;
    case 2:
        burger = burgerDirector.serveCheeseBurger();
        break;
    case 3:
        burger = burgerDirector.serveVeggieBurger();
        break;
    case 4:
        burger = burgerDirector.serverDoubleBurger();
        break;
    case 5:
        burger = burgerDirector.serveCheeseBaconBurger();
        break;
    case 6:
        burger = burgerDirector.serveDotTechBurger();
        break;
    default:
        burger = burgerDirector.serveGozillaBurger();
        break;
}

console.log(burger);
    