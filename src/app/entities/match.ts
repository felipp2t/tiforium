import type { UUID } from 'node:crypto';
import type { Round } from './round.js';

interface MatchProps {
  id: UUID;
  rounds: Round[];
}

export class Match {
  private props: MatchProps;

  constructor(props: MatchProps) {
    this.props = props
  }

  get id(): string {
    return this.props.id;
  }

  get rounds(): Round[] {
    return this.props.rounds;
  }
}
