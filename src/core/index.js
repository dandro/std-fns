// @flow

import bicurry from './bicurry/bicurry';
import and from './and/and';
import inst from './inst/inst';
import or from './or/or';

const cand: (...$ReadOnlyArray<mixed>) => any = bicurry(and);
const cinst: (Object) => ?any = bicurry(inst);
const cor: (...$ReadOnlyArray<mixed>) => any = bicurry(or);

export { default as always } from './always/always';
export { and, cand };
export { bicurry };
export { default as compose } from './compose/compose';
export { default as composeRight } from './composeRight/composeRight';
export { default as curry } from './curry/curry';
export { default as curryRight } from './curryRight/curryRight';
export { default as identity } from './identity/identity';
export { inst, cinst };
export { default as negate } from './negate/negate';
export { default as not } from './not/not';
export { or, cor };
export { default as partial } from './partial/partial';
export { default as partialRight } from './partialRight/partialRight';
export { default as trim } from './trim/trim';

