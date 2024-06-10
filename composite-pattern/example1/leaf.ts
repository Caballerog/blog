import { Component } from "./component";

export class Leaf implements Component {
    operation(): void {
        console.log("Leaf operation.");
    }
}
