import { Armor } from "./armor-interface";
import { Weapon } from "../weapons/weapon.interface";

export class BodyArmor implements Armor {
  public usefulFunction(): string {
    return "The result of the BodyArmor";
  }

  public usefulFunctionWithWeapon(collaborator: Weapon): string {
    const result = collaborator.usefulFunction();
    return `The result of the BodyAmor collaborating with the (${result})`;
  }
}
