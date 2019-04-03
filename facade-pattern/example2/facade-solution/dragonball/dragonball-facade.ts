import { SaiyanAdapter } from './models/saiyan-adapter.model';
import { Saiyan } from './models/saiyan.model';
import { NamekianAdapter } from './models/namekian-adapter.model';
import { Namekian } from './models/namekian.model';
import { Human } from './models/human.model';
import { HumanAdapter } from './models/human-adapter.model';
import { PureRace } from './interfaces/pure-race.interface';

export class DragonballFacade {
  genki(): number {
    const gohan = new SaiyanAdapter(new Saiyan());
    const vegeta = new SaiyanAdapter(new Saiyan());
    const piccolo = new NamekianAdapter(new Namekian());
    const krilin = new HumanAdapter(new Human());

    const everybody = [gohan, vegeta, piccolo, krilin];

    return everybody.reduce(
      (power: number, pureRace: PureRace) => power + pureRace.genki(),
      0
    );
  }
}
