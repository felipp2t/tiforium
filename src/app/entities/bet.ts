import type { UUID } from 'node:crypto';

interface BetProps {
  id: UUID;
  predictedVictories: number;
}

export class Bet {
  private props: BetProps;

  constructor(props: BetProps) {
    this.props = props;
  }

  get id(): UUID {
    return this.props.id;
  }

  get predictedVictories(): number {
    return this.props.predictedVictories;
  }
}
