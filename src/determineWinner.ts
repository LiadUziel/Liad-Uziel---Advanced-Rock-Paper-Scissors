import { Hand } from "./types/hand.type.js";
import { Scoreboard } from "./types/scoreboard.interface.js";

/**
 *
 * @param p1Hands Player 1's hand picks
 * @param p2Hands Player 2's hand picks
 * @returns A string representing a scoreboard for the game
 */
export function determineWinnerWithScoreboard(
  p1Hands: Hand[],
  p2Hands: Hand[]
): Scoreboard {
  let p1Score = 0;
  let p2Score = 0;
  const outputMessage: string[] = [];

  let totalP1Score = 0;
  let totalP2Score = 0;

  // Add header
  outputMessage.push("\n=== ROCK PAPER SCISSORS SCOREBOARD ===\n");

  // Process each sub round
  for (let i = 0; i < p1Hands.length; i++) {
    const roundResult = determineSubRoundWinner(p1Hands[i], p2Hands[i]);

    // Update scores and add sub round details
    outputMessage.push(`Sub Round ${i + 1}:`);
    outputMessage.push(`Player 1: ${p1Hands[i]} vs Player 2: ${p2Hands[i]}`);

    if (roundResult === 1) {
      p1Score++;
      totalP1Score++;

      outputMessage.push("Result: Player 1 wins this round!");
    } else if (roundResult === 2) {
      p2Score++;
      totalP2Score++;

      outputMessage.push("Result: Player 2 wins this round!");
    } else {
      outputMessage.push("Result: Tie round!");
    }

    // Show current score after each round
    outputMessage.push(`Current Score - P1: ${p1Score} | P2: ${p2Score}\n`);
  }

  // Add final results
  outputMessage.push("=== FINAL RESULTS ===");
  outputMessage.push(`Player 1: ${p1Score} points`);
  outputMessage.push(`Player 2: ${p2Score} points`);
  outputMessage.push(
    "\nFinal Verdict: " +
      (p1Score > p2Score
        ? "Player 1 Wins the Game!!!"
        : p2Score > p1Score
        ? "Player 2 Wins the Game!!!"
        : "It's a Tie Game!")
  );

  const scoreboard: Scoreboard = {
    player1Points: totalP1Score,
    player2Points: totalP2Score,
    message: outputMessage.join("\n"),
  };

  return scoreboard;
}

/**
 * A function that decides who the winning player is for a single round
 *
 * @param p1Hand Player 1's hand selection
 * @param p2Hand Player 2's hand selection
 * @returns 0 in case of a draw, 1 in case player 1 won and 2 in case player 2 won
 */
function determineSubRoundWinner(p1Hand: Hand, p2Hand: Hand): number {
  if (p1Hand === p2Hand) {
    // Tie
    return 0;
  }

  const winningCombos: Record<Hand, Hand> = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  if (winningCombos[p1Hand] === p2Hand) {
    // Player 1 wins
    return 1;
  }

  // Player 2 wins
  return 2;
}
