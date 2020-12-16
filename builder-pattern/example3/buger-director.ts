import { Burger } from "./burger.model";
import { BurgerBuilder } from "./burger-builder";
import { BurgerType } from "./burger-type.interface";

export class BurgerDirector {

    public constructor(private builder: BurgerBuilder){
        this.builder = builder;
    }

    public serveRegularBurger(): Burger{
        return this.builder
                    .setType(BurgerType.NORMAL)
                    .build();
    }

    public serveCheeseBurger() : Burger{
        return this.builder
                    .addCheese()
                    .setType(BurgerType.CHEESE)
                    .build();
    }

    public serveVeggieBurger(): Burger{
        return this.builder
                    .addCheese()
                    .addLettuce()
                    .addTomato()
                    .setType(BurgerType.VEGGIE)
                    .build();
    }

    public serveDoubleBurger(): Burger{
        return this.builder.setDouble()
                      .setType(BurgerType.DOUBLE)
                      .build();
    }


    public serveCheeseBaconBurger(): Burger{
        return this.builder.addCheese()
                      .addBacon()
                      .setType(BurgerType.CHEESE_BACON)
                      .build();
    }

    public serveDotTechBurger(): Burger{
        return this.builder.setDouble()
                      .addCheese()
                      .addTomato()
                      .addBacon()
                      .addEgg()
                      .addChiliSauce()
                      .setType(BurgerType.DOTTECH)
                      .build();
    }

    public serveGodzillaBurger(): Burger{
        return this.builder.setDouble()
                      .addTomato()
                      .addLettuce()
                      .addOnion()
                      .addPickle()
                      .addBacon()
                      .addBacon()
                      .addChiliSauce()
                      .setType(BurgerType.GODZILLA)
                      .build();
    }
}
