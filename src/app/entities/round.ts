import type { UUID } from 'node:crypto';
import type { Turn } from './turn.js';

interface RoundProps {
  id: UUID;
  turns: Turn[];
}

export class Round {
  private props: RoundProps;
  private _winnerId: UUID | null = null;
  private _isDraw = false;

  constructor(props: RoundProps) {
    this.props = props;
    this.determineWinner();
  }

  get id(): string {
    return this.props.id;
  }

  get turns(): Turn[] {
    return this.props.turns;
  }

  get winner(): UUID | null {
    return this._winnerId || null;
  }

  get isDraw(): boolean {
    return this._isDraw || false;
  }

  private determineWinner() {
    const cardsPlayed = this.turns.flatMap(turn => turn.playedCard);

    if (!cardsPlayed.length) {
      this._isDraw = true;
      return;
    }

    const winnerCard = cardsPlayed.reduce((strongestCard, currentCard) =>
      currentCard.card.strength > strongestCard.card.strength
        ? currentCard
        : strongestCard,
    );

    this._winnerId = winnerCard.playerId;
  }
}
