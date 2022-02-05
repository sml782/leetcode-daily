// import { lastRemaining } from './sword-refers-to-offer/62.last-remaining';
// import { rob2 } from './dynamic-programming/213.house-robber-ii';
// import { generateBT } from './lib/binary-tree';
// import { createListNodeByArray } from './lib/linked-list';

import { testQueue } from './2022-new-plan/02.queue/622.design-circular-queue';

// const bt = generateBT([3,4,5,-7,-6,null,null,-7,null,-5,null,null,null,-4]);

// const head = createListNodeByArray([1, 2]);

const res = testQueue(
  ['MyCircularQueue','enQueue','Rear','Front','deQueue','Front','deQueue','Front','enQueue','enQueue','enQueue','enQueue'],
  [[3],[2],[],[],[],[],[],[],[4],[2],[2],[3]]
);

console.dir(res);