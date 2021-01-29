
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next=== undefined ? null : next);
  }
}

export function createListNode(): ListNode {
  const head = new ListNode();
  let curNode = head;
  for (let i = 0; i < 5; i++) {
    if (i === 0) {
      head.val = i;
      continue;
    }
    curNode = curNode.next = new ListNode(i);
  }
  return head;
}