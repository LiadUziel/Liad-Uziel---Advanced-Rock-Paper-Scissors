import { Game } from './game.js';
import { GameHelper } from './gameHelper.js';
import { PlayerType } from './types/playerType.type.js';

const run = async () => {
  const inputArgHands = GameHelper.getValueFromArgs('numberOfHands');
  const numberOfHands = GameHelper.validatePositiveNumber(inputArgHands, 3);

  const inputArgRounds = GameHelper.getValueFromArgs('numberOfRounds');
  const numberOfRounds = GameHelper.validatePositiveNumber(inputArgRounds, 2);

  const player1Type: PlayerType =
    GameHelper.validatePlayerType(GameHelper.getValueFromArgs(`player1Type`)) ||
    (await GameHelper.choosePlayerType('Choose player 1 type'));
  const player2Type: PlayerType =
    GameHelper.validatePlayerType(GameHelper.getValueFromArgs(`player2Type`)) ||
    (await GameHelper.choosePlayerType('Choose player 2 type'));

  const game = new Game(player1Type, player2Type, numberOfRounds, numberOfHands);
  await game.start();
};

run();
