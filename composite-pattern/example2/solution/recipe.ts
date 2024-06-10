import { RecipeComponent } from "./recipe-component";

export class Recipe implements RecipeComponent {
    name: string;
    components: RecipeComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addComponent(component: RecipeComponent): void {
        this.components.push(component);
    }

    showDetails(): string {
        let details = `Recipe: ${this.name}\n`;

        this.components.forEach(component => {
            details += `  ${component.showDetails()}\n`;
        });

        return details;
    }
}
