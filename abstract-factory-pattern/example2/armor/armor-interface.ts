import { Weapon } from "../weapons/weapon.interface";

export interface Armor {
  usefulFunction(): string;
  usefulFunctionWithWeapon(collaborator: Weapon): string;
}
