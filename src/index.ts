// import { lastRemaining } from './sword-refers-to-offer/62.last-remaining';
// import { rob2 } from './dynamic-programming/213.house-robber-ii';
// import { generateBT } from './lib/binary-tree';
import { createListNodeByArray } from './lib/linked-list';

import { reverseKGroup } from './2022-new-plan/01.linked-list/25.reverse-nodes-in-k-group';

// const bt = generateBT([3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]);

const head = createListNodeByArray([1, 2]);

const res = reverseKGroup(head, 2);

console.dir(res);