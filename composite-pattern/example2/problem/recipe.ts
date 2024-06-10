import { Ingredient } from './ingredient';
export class Recipe {
    name: string;
    ingredients: Ingredient[] = [];
    recipes: Recipe[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addIngredient(ingredient: Ingredient): void {
        this.ingredients.push(ingredient);
    }

    addRecipe(recipe: Recipe): void {
        this.recipes.push(recipe);
    }

    showDetails(): string {
        let details = `Recipe: ${this.name}\n`;

        this.ingredients.forEach(ingredient => {
            details += `  ${ingredient.showDetails()}\n`;
        });

        this.recipes.forEach(recipe => {
            details += `  ${recipe.showDetails()}`;
        });

        return details;
    }
}