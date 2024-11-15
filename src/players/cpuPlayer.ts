import { GameHelper } from '../gameHelper.js';
import { Hand } from '../types/hand.type.js';

export class CpuPlayer {
  getHands = (numberOfHands: number) => {
    const hands: Hand[] = [];
    for (let index = 0; index < numberOfHands; index++) {
      const hand = GameHelper.chooseRandomHand();
      hands.push(hand);
    }
    return hands;
  };
}
