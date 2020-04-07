import { Saiyan } from './saiyan.class';

export class SaiyanFactory {
  public saiyans = [
    { name: 'Son Goku', power: 1000 },
    { name: 'Son Gohan', power: 800 },
    { name: 'Vegeta', power: 950 },
  ];

  public getSaiyan(name: string): Saiyan | null {
    // Mock Database find
    for (const saiyan of this.saiyans) {
      if (saiyan.name === name) {
        return new Saiyan(saiyan);
      }
    }
    return null;
  }
}
