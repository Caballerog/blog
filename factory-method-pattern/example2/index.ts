import { PRODUCT_TYPE } from "./product-type.enum";
import { ProductManager } from "./product-manager";

const productManager = new ProductManager();

const burger = productManager.createProduct(PRODUCT_TYPE.BURGER);
const pizza = productManager.createProduct(PRODUCT_TYPE.PIZZA);
const kebab = productManager.createProduct(PRODUCT_TYPE.KEBAB);

console.log(burger.operation());
console.log(pizza.operation());
console.log(kebab.operation());
