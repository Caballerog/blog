import { AbstractFactory } from "./abstract-factory";
import { Armor } from "./armor/armor-interface";
import { BodyArmor } from "./armor/body-armor.model";
import { Sword } from "./weapons/sword.model";
import { Weapon } from "./weapons/weapon.interface";

export class WarriorFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new Sword();
  }

  public createArmor(): Armor {
    return new BodyArmor();
  }
}
