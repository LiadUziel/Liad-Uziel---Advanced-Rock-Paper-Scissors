import { determineWinnerWithScoreboard } from "./determineWinner.js";
import { GameHelper } from "./gameHelper.js";
import { PlayerType } from "./types/playerType.type.js";

export class Game {
  private player1Type: PlayerType;
  private player2Type: PlayerType;
  private numberOfRounds: number;
  private numberOfHands: number;
  private totalPointsPlayer1: number;
  private totalPointsPlayer2: number;

  constructor(
    player1Type: PlayerType,
    player2Type: PlayerType,
    numberOfRounds: number,
    numberOfHands: number
  ) {
    // Input from user
    this.player1Type = player1Type;
    this.player2Type = player2Type;
    this.numberOfRounds = numberOfRounds;
    this.numberOfHands = numberOfHands;

    // Initialize total points for players
    this.totalPointsPlayer1 = 0;
    this.totalPointsPlayer2 = 0;
  }

  async start(): Promise<void> {
    const [player1, player2] = GameHelper.buildPlayersByType(
      this.player1Type,
      this.player2Type
    );

    for (let index = 0; index < this.numberOfRounds; index++) {
      console.log(`Round ${index + 1}/${this.numberOfRounds}:`);

      if (this.player1Type === "Human") {
        console.log("Player 1:");
      }
      const p1Hands = await player1.getHands(this.numberOfHands);

      if (this.player2Type === "Human") {
        console.log("Player 2:");
      }
      const p2Hands = await player2.getHands(this.numberOfHands);

      const scoreboard = determineWinnerWithScoreboard(p1Hands, p2Hands);
      console.log("SCOREBOARD:", scoreboard.message);

      // Update total points based on the scoreboard
      this.totalPointsPlayer1 += scoreboard.player1Points;
      this.totalPointsPlayer2 += scoreboard.player2Points;
    }

    // Display the total points after all rounds
    console.log("FINAL TOTAL POINTS:");
    console.log(`Player 1: ${this.totalPointsPlayer1}`);
    console.log(`Player 2: ${this.totalPointsPlayer2}`);

    console.log("Thanks for playing! Goodbye.");
  }
}
