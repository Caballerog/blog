import { Freeza } from "./freeza";

export abstract class State {

    abstract power: number;
    abstract energy: number;
    protected freeza: Freeza;


    public setFreeza(freeza: Freeza) {
        this.freeza = freeza;
    }
    public getEnergy() {
        return this.energy;
    }


    public abstract attack(): void;
    public abstract defend(value: number): void 
}