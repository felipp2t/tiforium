import { type UUID, randomUUID } from 'node:crypto';
import type { Card } from '../entities/card.js';
import { Turn } from '../entities/turn.js';

interface PlayedCard {
  playerId: UUID;
  card: Card;
}

interface TurnProps {
  id?: UUID;
  playedCard: PlayedCard;
}

export const createTurn = (props: TurnProps): Turn => {
  return new Turn({
    id: props.id ?? randomUUID(),
    playedCard: {
      playerId: props.playedCard.playerId,
      card: props.playedCard.card,
    },
  });
};
