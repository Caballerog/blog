import { Freeza } from "./freeza";
import { STATE } from "./state.enum";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const freeza = new Freeza(STATE.TRANSFORMATION1); // Initial State

(async () => {
  while(freeza.isAlive()){
    freeza.attack();
    await sleep(1000);
    freeza.defend(10);
    await sleep(1000);
  } 
})()
