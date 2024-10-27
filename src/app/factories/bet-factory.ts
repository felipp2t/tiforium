import { type UUID, randomUUID } from 'node:crypto';
import { Bet } from '../entities/bet.js';

interface BetProps {
  id?: UUID;
  predictedVictories: number;
}

export const createBet = (props: BetProps): Bet => {
  return new Bet({
    id: props.id ?? randomUUID(),
    predictedVictories: props.predictedVictories,
  });
};
