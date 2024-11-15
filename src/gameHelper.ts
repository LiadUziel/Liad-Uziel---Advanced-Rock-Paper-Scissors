import inquirer from "inquirer";
import { Hand } from "./types/hand.type.js";

export class GameHelper {

static async choosePlayerType(message: string) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'choice',
        message,
        choices: ['Human', 'Cpu'],
      },
    ]);
    return answer.choice;
  }

  static async chooseHand(message: string) {
    const answer = await inquirer.prompt([
        {
          type: 'list',
          name: 'choice',
          message,
          choices: ['Rock', 'Paper', 'Scissors'],
        },
      ]);
    return answer.choice;
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