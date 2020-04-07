import { SaiyanFactory } from './saiyan-factory.class';

const saiyanFactory = new SaiyanFactory();
const saiyan1 = saiyanFactory.getSaiyan('Vegeta');
const saiyan2 = saiyanFactory.getSaiyan('Bob');
const saiyan3 = saiyanFactory.getSaiyan('Son Goku');
const saiyan4 = saiyanFactory.getSaiyan('Laura');

console.log('Saiyan');
console.log(saiyan1.toString());
console.log(saiyan2.toString());
console.log(saiyan3.toString());
console.log(saiyan4.toString());
