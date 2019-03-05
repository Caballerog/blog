import { Person } from '../models/person.model';
import { Address } from '../models/address.model';
import { House } from '../models/house.model';

export class FakeObject {
  public static createAnAddress() {
    return new Address(
      '56565656',
      '1456',
      'Rua da Aurora',
      'Recife',
      'Pernambuco',
      'Brasil'
    );
  }

  public static createAHouse(): House {
    return new House(this.createAnAddress(), 'Yellow', 125.7);
  }

  public static createAPerson(): Person {
    return new Person('Carlos Caballero', this.createAHouse());
  }
}
