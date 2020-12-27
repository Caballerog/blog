import { Weapon } from "./weapon.interface";

export class Sword implements Weapon {
  public usefulFunction(): string {
    return "The result of the Sword";
  }
}
