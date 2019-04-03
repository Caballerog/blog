import { ClassC } from './classC';
import { ClassC3 } from './classC3';
import { ClassD } from './classD';

export class FacadeSystem2 {
  private c = new ClassC();
  private c3 = new ClassC3();

  private d = new ClassD();

  methodC() {
    this.c.methodC();
  }
  methodC3() {
    this.c3.methodC3();
  }
  methodD() {
    this.d.methodD();
  }
}
