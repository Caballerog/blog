import { Component } from "./component";

export class Composite implements Component {
    private children: Component[] = [];

    // Add a child to the list of children
    addChild(child: Component): void {
        this.children.push(child);
    }

    // Remove a child from the list of children
    removeChild(child: Component): void {
        const index = this.children.indexOf(child);
        if (index !== -1) {
            this.children.splice(index, 1);
        }
    }

    // Implement the operation defined in the Component interface
    operation(): void {
        console.log("Composite operation.");
        this.children.forEach(child => child.operation());
    }
}