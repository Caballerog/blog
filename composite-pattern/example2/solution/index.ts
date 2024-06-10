import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

// Usage
const ingredient1 = new Ingredient("Flour", "2 cups");
const ingredient2 = new Ingredient("Eggs", "3");
const recipe = new Recipe("Cake");
recipe.addComponent(ingredient1);
recipe.addComponent(ingredient2);

const ingredient3 = new Ingredient("Milk", "1 cup");
const compositeRecipe = new Recipe("Cake with Milk");
compositeRecipe.addComponent(recipe);
compositeRecipe.addComponent(ingredient3);

console.log(compositeRecipe.showDetails());

