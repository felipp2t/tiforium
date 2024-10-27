import type { UUID } from 'node:crypto';
import type { Card } from './card.js';
import type { Player } from './player.js';

interface TurnProps {
  id: UUID;
  player: Player;
  card: Card;
}

export class Turn {
  private props: TurnProps;

  constructor(props: TurnProps) {
    this.props = props
  }

  get id(): string {
    return this.props.id;
  }

  get player(): Player {
    return this.props.player;
  }

  get card(): Card {
    return this.props.card;
  }
}
