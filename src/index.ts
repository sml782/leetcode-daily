// import { lastRemaining } from './sword-refers-to-offer/62.last-remaining';
// import { rob2 } from './dynamic-programming/213.house-robber-ii';
// import { generateBT } from './lib/binary-tree';
import { removeNthFromEnd } from './2022-new-plan/19.remove-nth-node-from-end-of-list';

import { createListNodeByArray } from './lib/linked-list';

// const bt = generateBT([3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]);

const head = createListNodeByArray([1, 2, 3, 4, 5]);

const res = removeNthFromEnd(head, 2);

console.dir(res);