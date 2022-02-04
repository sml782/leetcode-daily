/**
 * 19. 删除链表的倒数第 N 个结点
 * 
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
 * 
 * @example 1
 * 输入：head = [1,2,3,4,5], n = 2
 * 输出：[1,2,3,5]
 * 
 * @example 2
 * 输入：head = [1], n = 1
 * 输出：[]
 * 
 * @example 3
 * 输入：head = [1,2], n = 1
 * 输出：[1]
 * 
 * @tip
 * 链表中结点的数目为 sz
 * 1 <= sz <= 30
 * 0 <= Node.val <= 100
 * 1 <= n <= sz
 * 
 * @see https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 利用长度求位置
 * 
 * @param {ListNode | null} head
 * @param {number} n
 * @return {ListNode | null}
 */
export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return head;
  }

  const newHead = new ListNode(0, head);

  let listLength = 0;
  let tempNode: ListNode | null = newHead.next;

  while (tempNode) {
    listLength++;
    tempNode = tempNode.next;
  }

  let positiveN = listLength - n;
  tempNode = newHead;

  while (positiveN && tempNode) {
    positiveN--;
    tempNode = tempNode.next;
  }

  if (!tempNode || !tempNode.next) {
    return head;
  }

  tempNode.next = tempNode.next.next;

  return newHead.next;
};

/**
 * 快慢指针
 * 1.让快指针在指定位置等待
 * 2.快慢指针一起走直到快指针走到头，此时慢指针的位置就是要删除的位置
 * 3.删除节点
 * 
 * @param {ListNode | null} head
 * @param {number} n
 * @return {ListNode | null}
 */
export function removeNthFromEnd1(head: ListNode | null, n: number): ListNode | null {
  if (!head) {
    return head;
  }

  const newHead = new ListNode(0, head);
  let slowNode: ListNode | null = newHead;
  let fastNode: ListNode | null = newHead;

  while (n-- && fastNode.next) {
    fastNode = fastNode.next;
  }

  if (!fastNode) {
    return head;
  }

  while (fastNode?.next && slowNode?.next) {
    fastNode = fastNode.next;
    slowNode = slowNode.next;
  }

  slowNode.next = slowNode.next?.next || null;

  return newHead.next;
}