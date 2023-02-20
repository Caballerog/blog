import { Freeza } from "./freeza";
import { Transformation1 } from "./states/transformation1";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
const freeza = new Freeza(new Transformation1()); // Initial State

(async () => {
  while(freeza.isAlive()){
    freeza.attack();
    await sleep(1000);
    freeza.defend(10);
    await sleep(1000);
  } 
})()
