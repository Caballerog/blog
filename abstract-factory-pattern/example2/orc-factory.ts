import { AbstractFactory } from "./abstract-factory";
import { Armor } from "./armor/armor-interface";
import { Axe } from "./weapons/axe.model";
import { OrcArmor } from "./armor/orc-armor.model";
import { Weapon } from "./weapons/weapon.interface";

export class OrcFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new Axe();
  }

  public createArmor(): Armor {
    return new OrcArmor();
  }
}
