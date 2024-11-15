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

  /**
   * Get value from arguments of appropriate key
   *
   * @param key from arguments
   * @returns value of this key
   */
  static getValueFromArgs = (key: string) => {
    const args = process.argv;

    // Find the argument by key in the format {key}=value
    const arg = args.find((arg) => arg.startsWith(`${key}=`));

    if (arg) {
      // Split the key and value, returning the value part
      const value = arg.split("=")[1];
      return value;
    }

    return undefined;
  };

  // Helper function to validate numbers
  /**
   * Helper function to validate positive numbers
   *
   * @param value input as string
   * @param defaultValue
   * @returns input as number, in case its legal
   */
  static validatePositiveNumber(
    value: string | undefined,
    defaultValue: number
  ) {
    const num = Number(value);
    return num > 0 ? num : defaultValue;
  }

  /**
   * Helper function to validate PlayerType
   *
   * @param value input ads string
   * @returns normalized PlayerType
   */
  static validatePlayerType(value: string | undefined): PlayerType | undefined {
    if (!value) {
      return undefined;
    }

    const normalizedValue = value.toLowerCase();
    if (normalizedValue === "human") {
      return "Human";
    }
    if (normalizedValue === "cpu") {
      return "Cpu";
    }
    return undefined;
  }
}
