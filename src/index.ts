import { reverseList } from './sword-refers-to-offer/24.reverse-list';
import { createListNode } from './lib/linked-list';

const head = createListNode();
const res = reverseList(head);

console.dir(res);