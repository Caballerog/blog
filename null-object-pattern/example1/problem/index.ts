import { SaiyanFactory } from './saiyan-factory.class';

const saiyanFactory = new SaiyanFactory();
const saiyan1 = saiyanFactory.getSaiyan('Vegeta');
const saiyan2 = saiyanFactory.getSaiyan('Bob');
const saiyan3 = saiyanFactory.getSaiyan('Son Goku');
const saiyan4 = saiyanFactory.getSaiyan('Laura');

console.log('Saiyan');
if (saiyan1 !== null) {
  console.log(saiyan1.toString());
} else {
  console.log('Not Available in Customer Database');
}
if (saiyan2 !== null) {
  console.log(saiyan2.toString());
} else {
  console.log('Not Available in Customer Database');
}
if (saiyan3 !== null) {
  console.log(saiyan3.toString());
} else {
  console.log('Not Available in Customer Database');
}
if (saiyan4 !== null) {
  console.log(saiyan4.toString());
} else {
  console.log('Not Available in Customer Database');
}
