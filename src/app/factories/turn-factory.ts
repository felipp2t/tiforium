import { type UUID, randomUUID } from 'node:crypto';
import type { Card } from '../entities/card.js';
import type { Player } from '../entities/player.js';
import { Turn } from '../entities/turn.js';

interface TurnProps {
  id?: UUID;
  player: Player;
  card: Card;
}

export const createTurn = (props: TurnProps): Turn => {
  return new Turn({
    id: props.id ?? randomUUID(),
    card: props.card,
    player: props.player,
  });
}
