import { Saiyan } from './models/saiyan.model';
import { Namekian } from './models/namekian';
import { AndroidAdapter } from './models/android-adapter.model';
import { Android } from './models/android.model';

const goku = new Saiyan();
const vegeta = new Saiyan();
const piccolo = new Namekian();
const C17 = new AndroidAdapter(new Android());

console.log(`Goku attack: ${goku.attack()}`);
console.log(`Vegeta attack: ${vegeta.attack()}`);
console.log(`Picolo attack: ${piccolo.attack()}`);
console.log(`C17 attack: ${C17.attack()}`);
