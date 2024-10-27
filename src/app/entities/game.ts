import type { UUID } from 'node:crypto';
import type { Round } from './round.js';

interface GameProps {
  id: UUID;
  lobbyId: UUID;
  rounds: Round[];
}

export class Game {
  private props: GameProps;

  constructor(props: GameProps) {
    this.props = props;
  }

  get id(): UUID {
    return this.props.id;
  }

  get lobbyId(): UUID {
    return this.props.lobbyId;
  }

  get rounds(): Round[] {
    return this.props.rounds;
  }
}
