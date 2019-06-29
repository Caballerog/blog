import { CharacterDecorator } from './character-decorator';
import { SimpleCharacter } from './simple-character';
import { WhiteWalkerDecorator } from './white-walker-decorator';

const NUM_HUMANS = 150;
const humans = Array.from(
  Array(NUM_HUMANS),
  (_, index) => new CharacterDecorator(new SimpleCharacter(`Human${index + 1}`))
);

const nightKing = createNightKing();

const whiteWalkers = [nightKing];
console.log('The War started!');
let human;
let whiteWalker;
while (!isWarFinished(humans, whiteWalkers)) {
  human = humans.pop();
  whiteWalker = whiteWalkers.pop();
  while (human.isAlive() && whiteWalker.isAlive()) {
    whiteWalker.receiveHit(human.attack());
    human.receiveHit(whiteWalker.attack());
  }
  if (human.isAlive()) {
    console.log('Human Win!');
    log(human, whiteWalker);
    humans.push(human);
  }
  if (whiteWalker.isAlive()) {
    console.log('WhiteWalker Win!....');
    whiteWalkers.push(whiteWalker);
    console.log('...Human is now a White Walker:', human.character.name);
    whiteWalkers.push(
      new WhiteWalkerDecorator(
        new SimpleCharacter(`White Walker: ${human.character.name}`)
      )
    );
  }
  console.log('-----WhiteWalkers------');
  console.table(whiteWalkers);
  console.log('-----Humans------');
  console.table(humans);
}
console.log('The War is finished');

function isWarFinished(
  humans: CharacterDecorator[],
  whiteWalkers: WhiteWalkerDecorator[]
) {
  return humans.length === 0 || whiteWalkers.length === 0;
}

function log(human: CharacterDecorator, whiteWalker: WhiteWalkerDecorator) {
  console.log('---------------');
  console.log(`${human.toString()}  Vs ${whiteWalker.toString()}`);
  console.log();
  console.log('---------------');
}
function createNightKing() {
  const nightKing = new WhiteWalkerDecorator(new SimpleCharacter('Night King'));
  nightKing.setLife(500);
  nightKing.setPower(2);
  return nightKing;
}
