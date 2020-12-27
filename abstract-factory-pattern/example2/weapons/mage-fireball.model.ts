import { Weapon } from "./weapon.interface";

export class MageFireball implements Weapon {
  public usefulFunction(): string {
    return "The result of the MageFireball";
  }
}
