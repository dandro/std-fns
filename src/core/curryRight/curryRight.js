// @flow

function nest(
  func: Function,
  args: $ReadOnlyArray<mixed>
): Function {
  return (...vals: $ReadOnlyArray<mixed>): any => {
    const nextArgs: $ReadOnlyArray<mixed> = args.concat(vals);
    if (nextArgs.length === func.length) {
      return func(...nextArgs.concat([]).reverse());
    }

    return nest(func, nextArgs);
  };
}

/**
 * Curry a function taking arguments from right to left. The constructor function accepts multiple value arguments. Returned functions also accept multiple arguments.
 * @param fn {Function}
 * @param initialArgs {$ReadOnlyArray<mixed>} - Comma separated list of arguments. Can be undefined.
 * @returns {Function}
 */
function curryRight(
  fn: Function,
  ...initialArgs: $ReadOnlyArray<mixed>
): (...$ReadOnlyArray<mixed>) => any {
  if (fn.length === 0) return fn;
  return nest(fn, initialArgs);
}

export default curryRight;
