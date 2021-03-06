// @flow

/**
 * Partially apply arguments to a function from left to right.
 * @param fn {Function}
 * @param args {$ReadOnlyArray<mixed>} - Comma separated list of values.
 * @returns {function(...[$ReadOnlyArray<*>]): T}
 */
function partial<T>(
  fn: (...$ReadOnlyArray<any>) => T,
  ...args: $ReadOnlyArray<mixed>
): (...$ReadOnlyArray<any>) => T {
  return fn.bind(null, ...args);
}

export default partial;
