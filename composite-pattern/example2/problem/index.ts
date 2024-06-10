import { Ingredient } from "./ingredient";
import { Recipe } from "./recipe";

const ingredient1 = new Ingredient("Flour", "2 cups");
const ingredient2 = new Ingredient("Eggs", "3");
const recipe = new Recipe("Cake");
recipe.addIngredient(ingredient1);
recipe.addIngredient(ingredient2);

const ingredient3 = new Ingredient("Milk", "1 cup");
const compositeRecipe = new Recipe("Cake with Milk");
compositeRecipe.addRecipe(recipe);
compositeRecipe.addIngredient(ingredient3);

console.log(compositeRecipe.showDetails());
