import { randomUUID } from 'node:crypto';
import { expect, test } from 'vitest';
import { Card } from './card';

test('create card', () => {
  const card = new Card({
    id: randomUUID(),
    value: '1',
    suit: 'HEARTS',
  });

  expect(card.value).toBe('1');
  expect(card.suit).toBe('HEARTS');
});
