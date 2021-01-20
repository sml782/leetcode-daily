/**
 * 剑指 Offer 06. 从尾到头打印链表
 * 
 * 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
 * 
 * @example 示例 1：
 * 输入：head = [1,3,2]
 * 输出：[2,3,1]
 * 
 * 限制：
 * 0 <= 链表长度 <= 10000
 */


class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

// NOTE: 直接正向获取链表元素，然后反转
export function reversePrint(head: ListNode | null): number[] {
  const result: number[] = [];
  if (!head) {
    return result;
  }
  let curNode: ListNode | null = head;
  while (curNode) {
    result.push(curNode.val);
    curNode = curNode.next;
  }
  return result.reverse();
};