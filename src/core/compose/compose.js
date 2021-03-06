// @flow

/**
 * Compose a function from all functions passed as arguments from left to right.
 * @param fns {Function} - Comma separated list of functions
 * @returns {function(...[Array<*>]): Function}
 */
function compose(...fns: $ReadOnlyArray<Function>): Function {
  return function(...args: $ReadOnlyArray<mixed>): any {
    return fns
      .slice(1)
      .reduce((
        result: any,
        fn: Function
      ): any => fn(result), fns[0](...args));
  };
}

export default compose;
