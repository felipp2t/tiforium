import { expect, test } from 'vitest';
import { getCard } from '../factories/card-factory.js';

test('get card', () => {
  const card = getCard({
    value: '1',
    suit: 'HEARTS',
  });

  expect(card.value).toBe('1');
  expect(card.suit).toBe('HEARTS');
});
