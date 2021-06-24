import { maxDepth } from './sword-refers-to-offer/55.max-depth';
import { generateBT } from './lib/binary-tree';

const bt = generateBT([3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]);

const res = maxDepth(bt);

console.dir(res);