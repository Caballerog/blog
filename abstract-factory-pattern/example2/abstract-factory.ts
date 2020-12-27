import { Armor } from "./armor/armor-interface";
import { Weapon } from "./weapons/weapon.interface";

export interface AbstractFactory {
  createWeapon(): Weapon;
  createArmor(): Armor;
}
