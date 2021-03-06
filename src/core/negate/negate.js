// @flow

/**
 * Creates a function which negates the value of the result.
 * Works like the ! operator on the result of the function provided
 * @param fn {Function}
 * @returns {function(...[$ReadOnlyArray<*>]): boolean}
 */
function negate(fn: Function): (...args: $ReadOnlyArray<mixed>) => boolean {
  return function negated(...args: $ReadOnlyArray<mixed>): boolean {
    return !fn(...args);
  };
}

export default negate;
