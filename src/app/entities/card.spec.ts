import { randomUUID } from 'node:crypto';
import { expect, test } from 'vitest';
import { Card } from './card';

test('create card', () => {
  const sut = new Card({
    id: randomUUID(),
    value: '1',
    suit: 'HEARTS',
  });

  expect(sut.value).toBe('1');
  expect(sut.suit).toBe('HEARTS');
});
