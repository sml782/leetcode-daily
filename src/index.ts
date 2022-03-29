// import { lastRemaining } from './sword-refers-to-offer/62.last-remaining';
// import { rob2 } from './dynamic-programming/213.house-robber-ii';
import { generateBT } from './lib/binary-tree';
// import { createListNodeByArray } from './lib/linked-list';
import { inorderTraversal1 } from './top100/94.binary-tree-inorder-traversal';

// import { lemonadeChange } from './2022-new-plan/860.lemonade-change';

const bt = generateBT([1,null,2,3]);

// const head = createListNodeByArray([1, 2]);

const res = inorderTraversal1(bt);

console.dir(res);