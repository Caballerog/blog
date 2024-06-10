import { Component } from "./component";
import { Composite } from "./composite";
import { Leaf } from "./leaf";

const leaf1: Component = new Leaf();
const leaf2: Component = new Leaf();
const leaf3: Component = new Leaf();
const composite1: Component = new Composite();
const composite2: Component = new Composite();

// Build the tree structure
(composite1 as Composite).addChild(leaf1);
(composite1 as Composite).addChild(leaf2);
(composite2 as Composite).addChild(leaf3);
(composite2 as Composite).addChild(composite1);

// Call the operation on the root composite
composite2.operation();

