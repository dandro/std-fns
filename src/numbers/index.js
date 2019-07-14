// @flow

import { bicurry } from './../core';
import subtract from './subtract/subtract';
import sum from './sum/sum';

const csubtract: (...numbers: $ReadOnlyArray<number>) => number = bicurry(subtract);
const csum: (...numbers: $ReadOnlyArray<number>) => number = bicurry(sum);

export { default as dec } from './dec/dec';
export { default as inc } from './inc/inc';
export { subtract, csubtract };
export { sum, csum };
