import { Weapon } from "./weapon.interface";

export class Axe implements Weapon {
  public usefulFunction(): string {
    return "The result of the Axe";
  }
}
