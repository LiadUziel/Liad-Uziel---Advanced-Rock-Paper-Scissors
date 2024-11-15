import inquirer from "inquirer";
import { Hand } from "./types/hand.type.js";
import { PlayerType } from "./types/playerType.type.js";
import { HumanPlayer } from "./players/humanPlayer.js";
import { CpuPlayer } from "./players/cpuPlayer.js";

export class GameHelper {
  static async choosePlayerType(message: string) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message,
        choices: ["Human", "Cpu"],
      },
    ]);
    return answer.choice;
  }

  static async chooseHand(message: string) {
    const answer = await inquirer.prompt([
      {
        type: "list",
        name: "choice",
        message,
        choices: ["Rock", "Paper", "Scissors"],
      },
    ]);
    return answer.choice;
  }

  /**
   * Building the players objects according to their given type
   * @param player1Type
   * @param player2Type
   * @returns An array of 2 players of the appropriate type
   */
  static buildPlayersByType(player1Type: PlayerType, player2Type: PlayerType) {
    let player1: HumanPlayer | CpuPlayer;
    let player2: HumanPlayer | CpuPlayer;

    if (player1Type === "Human") {
      player1 = new HumanPlayer();
    } else {
      player1 = new CpuPlayer();
    }

    if (player2Type === "Human") {
      player2 = new HumanPlayer();
    } else {
      player2 = new CpuPlayer();
    }

    return [player1, player2];
  }

  static chooseRandomHand(): Hand {
    const hands: Hand[] = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * hands.length);
    return hands[randomIndex];
  }

  static getValueFromArgs = (key: string) => {
    /*
    TODO: complete this function to return the value of the key from the process.argv array
    */
    return undefined;
  };
}
