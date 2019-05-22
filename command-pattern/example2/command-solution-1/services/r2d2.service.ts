export class R2D2Service {
  constructor() {}
  clean() {
    console.log('R2D2Service -> Clean ');
  }
  move(direction: string) {
    console.log('R2D2Service -> Move: ', direction);
  }
}
