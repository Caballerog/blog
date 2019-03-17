export class Android {
  public punch(): number {
    return 10;
  }
  public kick(): number {
    return Math.random() * this.punch() + this.punch();
  }
}
