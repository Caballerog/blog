export class VirtualPet {
    name: string;
    color: string;
    abilities: string[];
    energyLevel: number = 0;

    constructor(name: string, color: string, abilities: string[]) {
        this.name = name;
        this.color = color;
        this.abilities = abilities;
        this.calculateEnergy(3000)
    }

    private calculateEnergy(milliseconds: number) {
        const start = new Date().getTime();
        let end = start;
        
        console.log(`Initializing ${this.name}...`);
        while (end < start + milliseconds) {
            end = new Date().getTime();
        }
        this.energyLevel = 100;
    }


    displayInfo() {
        console.log(`Name: ${this.name}, Color: ${this.color}, Abilities: ${this.abilities.join(', ')}, Energy Level: ${this.energyLevel}`);
    }
}