import type { UUID } from "node:crypto";
import type { Turn } from "./turn.js";
import { Pile } from "./pile.js";

interface RoundProps {
  id: UUID;
  turns: Turn[];
  pile: Pile;
}

export class Round {
  private props: RoundProps;
  private _winnerId: UUID | null = null;
  private _isDraw = false;

  constructor(props: RoundProps) {
    this.props = props;
    this.props.pile.cancelCardsOfTheSameValue(
      this.props.turns.map((turn) => turn.playedCard)
    );
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
    const cardsPlayed = this.props.pile.cardsPlayed;

    if (!cardsPlayed) return;

    if (!cardsPlayed.length) {
      this._isDraw = true;
      return;
    }

    const winnerCard = cardsPlayed.reduce((strongestCard, currentCard) =>
      currentCard.card.strength > strongestCard.card.strength
        ? currentCard
        : strongestCard
    );

    this._winnerId = winnerCard.playerId;
  }
}
