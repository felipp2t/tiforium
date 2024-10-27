import { type UUID, randomUUID } from 'node:crypto';
import type { Player } from '../entities/player.js';
import { Round } from '../entities/round.js';
import type { Turn } from '../entities/turn.js';

interface RoundProps {
  id?: UUID;
  turns: Turn[];
  winner: Player;
}

export const createRound = (props: RoundProps): Round => {
  return new Round({
    id: props.id ?? randomUUID(),
    turns: props.turns,
    winner: props.winner,
  });
}
