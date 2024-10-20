import type { UUID } from 'node:crypto';
import type { Player } from './player';
import type { Turn } from './turn';

interface RoundProps {
  id: UUID;
  turns: Turn[];
  winner: Player;
}

export class Round {
  private props: RoundProps;

  constructor(props: RoundProps) {
    this.props = {
      ...props,
    };
  }

  get id(): string {
    return this.props.id;
  }

  get turns(): Turn[] {
    return this.props.turns;
  }

  get winner(): Player {
    return this.props.winner;
  }
}
