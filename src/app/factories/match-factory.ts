import { type UUID, randomUUID } from 'node:crypto';
import { Match } from '../entities/match.js';
import type { Round } from '../entities/round.js';

interface MatchProps {
  id?: UUID;
  rounds: Round[];
}

export const createMatch = (props: MatchProps): Match => {
  return new Match({
    id: props.id ?? randomUUID(),
    rounds: props.rounds,
  });
};
