import { Handler } from "./handler";
import { HandlerA } from "./handlerA";
import { HandlerB } from "./handlerB";
import { HandlerC } from "./handlerC";

function clientCode(handler: Handler) {
  const options = ["optionA", "optionB", "optionC"];

  for (const option of options) {
    console.log(`Client: Who does ${option}?`);

    const result = handler.handle(option);
    const message = result ? result : `${option} was left untouched.`;
    console.log(message);
  }
}

const handlerA = new HandlerA();
const handlerB = new HandlerB();
const handlerC = new HandlerC();

handlerA.setNext(handlerB).setNext(handlerC);

console.log("Chain: handlerA > handlerB > handlerC\n");
clientCode(handlerA);
console.log("");

console.log("Subchain: handlerB > handlerC\n");
clientCode(handlerB);
