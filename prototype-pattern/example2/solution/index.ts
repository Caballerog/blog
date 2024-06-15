import { VirtualPet } from "./virtual-pet";

// Create a virtual pet and initialize it
const neko = new VirtualPet('Neko', 'Red', ['Fly', 'Breath Fire', 'Invisibility']); // 3 seconds
neko.displayInfo();
    
    // Clonar la mascota virtual usando el patrón Prototype
const nya = neko.clone(); // a few milliseconds
nya.name = 'Nya';
nya.color = 'Yellow';
nya.displayInfo();


