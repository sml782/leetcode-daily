// import { lastRemaining } from './sword-refers-to-offer/62.last-remaining';
// import { rob2 } from './dynamic-programming/213.house-robber-ii';
// import { generateBT } from './lib/binary-tree';
// import { createListNodeByArray } from './lib/linked-list';

import { testQueue } from './2022-new-plan/02.queue/641.design-circular-deque';

// const bt = generateBT([3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]);

// const head = createListNodeByArray([1, 2]);

const res = testQueue(
  ['MyCircularDeque','insertFront','insertLast','getFront','insertLast','getFront','insertFront','getRear','getFront','getFront','deleteLast','getRear'],
  [[5],[7],[0],[],[3],[],[9],[],[],[],[],[]]
);

console.dir(res);