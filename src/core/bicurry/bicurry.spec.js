// @flow

import bicurry from './bicurry';

function subtract(
  n1: number,
  n2: number
): number {
  return n1 - n2;
}

function product(...numbers: $ReadOnlyArray<number>): number {
  if (numbers.length === 0) return 1;
  return numbers[0] * product(...numbers.slice(1));
}

describe('core/curryRight', () => {
  test('It should return a function per argument. After all arguments are passed, it should return the result.', () => {
    const expected: number = 6;

    const fn: Function = bicurry(subtract);
    const fn1: Function = fn(12);
    const actual: number = fn1(6);

    expect(actual).toBe(expected);
  });

  test('it should accept values in construct', () => {
    const expected: number = 6;

    const fn: Function = bicurry(subtract, 12);
    const actual: number = fn(6);

    expect(actual).toBe(expected);
  });

  test('it should accept multiple arguments when nested functions are called', () => {
    const expected: number = 6;

    const fn: Function = bicurry(subtract);
    const actual: number = fn(12, 6);

    expect(actual).toBe(expected);
  });

  describe('Curry functions with infinite which take arguments', () => {
    test('Both arguments are passed after the currying', () => {
      const expected: number = 60;

      const fn: Function = bicurry(product);
      const actual: number = fn(10, 6);

      expect(actual).toBe(expected);
    });

    test('An argument is passed during currying', () => {
      const expected: number = 60;

      const fn: Function = bicurry(product, 10);
      const actual: number = fn(6);

      expect(actual).toBe(expected);
    });
  });
});
