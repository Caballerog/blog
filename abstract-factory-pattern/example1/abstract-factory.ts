import { AbstractProductA } from "./abstract-productA";
import { AbstractProductB } from "./abstract-productB";

export interface AbstractFactory {
  createProductA(): AbstractProductA;
  createProductB(): AbstractProductB;
}
