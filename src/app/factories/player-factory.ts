import { type UUID, randomUUID } from 'node:crypto';
import type { STATUS } from '../config/player-status.js';
import type { Bet } from '../entities/bet.js';
import type { Card } from '../entities/card.js';
import { Player } from '../entities/player.js';

interface PlayerProps {
  id?: UUID;
  userId?: UUID;
  cards: Card[];
  bet: Bet;
  turnWins: number;
  status: STATUS;
}

export const createPlayer = (props: PlayerProps): Player => {
  return new Player({
    id: props.id ?? randomUUID(),
    userId: props.userId ?? randomUUID(),
    turnWins: 0,
    status: props.status,
    cards: props.cards,
    bet: props.bet,
  });
};
