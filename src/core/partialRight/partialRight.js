// @flow

/**
 * Partially apply arguments to a function from right to left.
 * @param fn {Function}
 * @param outerArgs {$ReadOnlyArray<mixed>} - Comma separated list of values.
 * @returns {function(...[$ReadOnlyArray<*>]): T}
 */
function partialRight<T>(
  fn: (...$ReadOnlyArray<any>) => T,
  ...outerArgs: $ReadOnlyArray<mixed>
): (...innerArgs: $ReadOnlyArray<any>) => T {
  return function(...innerArgs: $ReadOnlyArray<mixed>): T {
    return fn(...innerArgs.concat(outerArgs));
  };
}

export default partialRight;
