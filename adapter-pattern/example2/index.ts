import { Saiyan } from './models/saiyan.model';
import { Namekian } from './models/namekian';
import { Human } from './models/human.model';
import { SaiyanAdapter } from './models/saiyan-adapter.model';
import { NamekianAdapter } from './models/namekian-adapter.model';
import { HumanAdapter } from './models/human-adapter.model';
import { PureRace } from './interfaces/pure-race.interface';

const gohan = new SaiyanAdapter(new Saiyan());
const vegeta = new SaiyanAdapter(new Saiyan());
const piccolo = new NamekianAdapter(new Namekian());
const krilin = new HumanAdapter(new Human());

const everybody = [gohan, vegeta, piccolo, krilin];

const genki = everybody.reduce(
  (power: number, pureRace: PureRace) => power + pureRace.genki(),
  0
);
console.log(`everybody attack: ${genki}`);
