import { VirtualPet } from './virtual-pet';

// Create a virtual pet and initialize it
const neko = new VirtualPet('Neko', 'Gray', ['Fly', 'Breath Fire', 'Invisibility']); // 3 seconds
neko.displayInfo();
    

// Clone the virtual pet manually with all the attributes
const nya = new VirtualPet('Nya', 'Yellow', [...neko.abilities]); // 3 seconds
nya.displayInfo();
    
