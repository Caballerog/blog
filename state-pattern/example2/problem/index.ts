import { Freeza } from "./freeza";
import { State } from "./state.enum";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const freeza = new Freeza(State.TRANSFORMATION1); // Initial State

(async () => {
  while(freeza.isAlive()){
    freeza.attack();
    await sleep(1000);
    freeza.defend(10);
    await sleep(1000);
  } 
})();
