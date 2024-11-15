import { determineWinnerWithScoreboard } from "./determineWinner.js";
import { GameHelper } from "./gameHelper.js";
import { HumanPlayer } from "./players/humanPlayer.js";
import { PlayerType } from "./types/playerType.type.js";

const run = async () => {
  const numberOfHands = Number(
    GameHelper.getValueFromArgs("numberOfHands") || 3
  );
  const numberOfRounds = Number(
    GameHelper.getValueFromArgs("numberOfRounds") || 2
  );

  const player1Type: PlayerType =
    GameHelper.getValueFromArgs(`player1Type`) ||
    (await GameHelper.choosePlayerType("Choose player 1 type"));
  const player2Type: PlayerType =
    GameHelper.getValueFromArgs(`player2Type`) ||
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
  const player1 = new HumanPlayer();
  const player2 = new HumanPlayer();

  for (let index = 0; index < numberOfRounds; index++) {
    console.log(`Round ${index + 1}/${numberOfRounds}:`);

    console.log("Player 1:");
    const p1Hands = await player1.getHands(numberOfHands);

    console.log("Player 2:");
    const p2Hands = await player2.getHands(numberOfHands);

    const scoreboard = determineWinnerWithScoreboard(p1Hands, p2Hands);
    console.log("SCOREBOARD:", scoreboard);
  }
};

run();
