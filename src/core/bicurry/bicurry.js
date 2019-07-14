// @flow

function nest(
  func: Function,
  args: $ReadOnlyArray<mixed>
): Function {
  return (...vals: $ReadOnlyArray<mixed>): any => {
    const nextArgs: $ReadOnlyArray<mixed> = args.concat(vals);
    if (nextArgs.length === func.length) {
      return func(...nextArgs);
    }

    return nest(func, nextArgs);
  };
}

/**
 * Curry a function in two steps taking arguments 2 arguments or more from left to right.
 * The constructor function accepts multiple value arguments. Returned functions also
 * accept multiple arguments.
 *
 * The difference between bicurry and curry is that bicurry will only curry for 2 steps
 * meaning it transforms the function to a binary function which takes 2 arrays as arguments.
 *
 * This is useful to curry functions which do not take explicit arguments but infinite arguments.
 *
 * @param fn {Function}
 * @param initialArgs {Array<mixed>} - Comma separated list of arguments. Can be undefined.
 * @returns {Function}
 */
function bicurry(
  fn: Function,
  ...initialArgs: $ReadOnlyArray<mixed>
): (...$ReadOnlyArray<mixed>) => any {
  function bifn(a: any, b: any): any {
    return fn(a, b);
  }

  return nest(bifn, initialArgs);
}

export default bicurry;
