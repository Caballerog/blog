import { ConcreteCreator1 } from "./concrete-creator1";
import { ConcreteCreator2 } from "./concrete-creator2";
import { Creator } from "./creator";

function client(creator: Creator) {
  console.log(`Client: I'm not aware of the creator's class`);
  console.log(creator.operation());
}

const concreteCreator1 = new ConcreteCreator1();
const concreteCreator2 = new ConcreteCreator2();

client(concreteCreator1);

console.log("----------");

client(concreteCreator2);
