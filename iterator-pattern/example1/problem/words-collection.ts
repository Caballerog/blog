export class WordsCollection {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }

  public addItem(item: string): void {
    this.items.push(item);
  }
}
