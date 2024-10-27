import { randomUUID } from 'node:crypto';
import { expect, test } from 'vitest';
import { createCard } from '../factories/card-factory.js';

test('create card', () => {
  const card = createCard({
    id: randomUUID(),
    value: '1',
    suit: 'HEARTS',
  });

  expect(card.value).toBe('1');
  expect(card.suit).toBe('HEARTS');
});
