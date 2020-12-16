export class Product {
    public parts: string[] = [];

    public addPart(part: string): void {
        this.parts.push(part);
    }
    public removePart(part: string): void {
        this.parts = this.parts.filter(_part => _part !== part);
    }

    public showParts(): void {
        console.log(`Product parts: ${this.parts.join(', ')}\n`);
    }
}