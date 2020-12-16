import { BurgerType } from "./burger-type.interface";

export class Burger {
    private type: BurgerType = BurgerType.NORMAL;
    private cheese = false;
    private lettuce = false;
    private tomato = false;
    private double = false;
    private onion = false;
    private pickle = false;
    private bacon = false;
    private chiliSauce = false;
    private egg = false;

    public setType(type: BurgerType){
        this.type = type;
    }

    public setCheese() {
        this.cheese = true;
    }

    public setLettuce() {
        this.lettuce = true;
    }

    public setTomate() {
        this.tomato = true;
    }

    public setDouble() {
        this.double = true;
    }

    public setOnion() {
        this.onion = true;
    }

    public setPickle() {
        this.pickle = true;
    }

    public setBacon() {
       this. bacon = true;
    }

    public setChiliSauce() {
        this.chiliSauce = true;
    }

    public setEgg() {
        this.egg = true;
    }
}
