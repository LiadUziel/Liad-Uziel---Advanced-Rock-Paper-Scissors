import { GameHelper } from '../gameHelper.js';
import { CpuPlayerStrategy } from '../types/cpuPlayerStrategy.type.js';
import { Hand } from '../types/hand.type.js';

export class CpuPlayer {
  private strategy: CpuPlayerStrategy;

  constructor(strategy: CpuPlayerStrategy = 'random') {
    this.strategy = strategy;
  }

  /**
   * Switch between strategies
   * @param strategy
   */
  setStrategy(strategy: CpuPlayerStrategy) {
    this.strategy = strategy;
  }

  /**
   * Get hands based on the strategy
   *
   * @param numberOfHands
   */
  getHands = (numberOfHands: number) => {
    const hands: Hand[] = [];
    if (this.strategy === 'monkey') {
      // Monkey strategy: Draw one random hand per round
      hands.push(GameHelper.chooseRandomHand());
    } else {
      // Random strategy: Draw a number of random hands
      for (let index = 0; index < numberOfHands; index++) {
        const hand = GameHelper.chooseRandomHand();
        hands.push(hand);
      }
    }
    return hands;
  };
}
