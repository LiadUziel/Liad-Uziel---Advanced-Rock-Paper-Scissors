import { determineWinnerWithScoreboard } from "./determineWinner.js";
import { GameHelper } from "./gameHelper.js";
import { PlayerType } from "./types/playerType.type.js";

const run = async () => {
  const inputArgHands = GameHelper.getValueFromArgs("numberOfHands");
  const numberOfHands = GameHelper.validatePositiveNumber(inputArgHands, 3);

  const inputArgRounds = GameHelper.getValueFromArgs("numberOfRounds");
  const numberOfRounds = GameHelper.validatePositiveNumber(inputArgRounds, 3);

  const player1Type: PlayerType =
    GameHelper.validatePlayerType(GameHelper.getValueFromArgs(`player1Type`)) ||
    (await GameHelper.choosePlayerType("Choose player 1 type"));
  const player2Type: PlayerType =
    GameHelper.validatePlayerType(GameHelper.getValueFromArgs(`player2Type`)) ||
    (await GameHelper.choosePlayerType("Choose player 2 type"));

  await startGame(player1Type, player2Type, numberOfRounds, numberOfHands);

  console.log("Thanks for playing! Goodbye.");
};

const startGame = async (
  player1Type: PlayerType,
  player2Type: PlayerType,
  numberOfRounds: number,
  numberOfHands: number
) => {
  const [player1, player2] = GameHelper.buildPlayersByType(
    player1Type,
    player2Type
  );

  for (let index = 0; index < numberOfRounds; index++) {
    console.log(`Round ${index + 1}/${numberOfRounds}:`);

    if (player1Type === "Human") {
      console.log("Player 1:");
    }
    const p1Hands = await player1.getHands(numberOfHands);

    if (player2Type === "Human") {
      console.log("Player 2:");
    }
    const p2Hands = await player2.getHands(numberOfHands);

    const scoreboard = determineWinnerWithScoreboard(p1Hands, p2Hands);
    console.log("SCOREBOARD:", scoreboard);
  }
};

run();
