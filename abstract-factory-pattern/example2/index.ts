import { AbstractFactory } from "./abstract-factory";
import { MageFactory } from "./mage-factory";
import { OrcFactory } from "./orc-factory";
import { WarriorFactory } from "./warrior-factory";

function clientCode(factory: AbstractFactory) {
  const sword = factory.createWeapon();
  const armor = factory.createArmor();

  console.log(armor.usefulFunction());
  console.log(armor.usefulFunctionWithWeapon(sword));
}

console.log("Client: WarriorFactory");
clientCode(new WarriorFactory());

console.log("----------------");

console.log("Client: OrcFactory");
clientCode(new OrcFactory());

console.log("----------------");

console.log("Client: MageFactory");
clientCode(new MageFactory());
