import { AbstractFactory } from "./abstract-factory";
import { Armor } from "./armor/armor-interface";
import { Cloak } from "./armor/cloak.model";
import { MageFireball } from "./weapons/mage-fireball.model";
import { Weapon } from "./weapons/weapon.interface";

export class MageFactory implements AbstractFactory {
  public createWeapon(): Weapon {
    return new MageFireball();
  }

  public createArmor(): Armor {
    return new Cloak();
  }
}
