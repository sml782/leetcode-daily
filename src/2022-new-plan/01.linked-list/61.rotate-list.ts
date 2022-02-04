/**
 * 61. 旋转链表
 * 
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * @example 1
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * @example 2
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 * 
 * @tip
 * 链表中节点的数目在范围 [0, 500] 内
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 10^9
 * 
 * @see https://leetcode-cn.com/problems/rotate-list/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 把链表连成环
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {*}
 */
export function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head) {
    return head;
  }

  let listLength = 1;
  let currentNode: ListNode | null = head;
  while (currentNode.next) {
    currentNode = currentNode?.next;
    listLength++;
  }

  let moveIndex = listLength - k % listLength;

  if (moveIndex === listLength) {
    return head;
  }

  currentNode.next = head;
  while (moveIndex && currentNode) {
    currentNode = currentNode?.next;
    moveIndex--;
  }

  const newHead = currentNode?.next;
  currentNode!.next = null;

  return newHead!;
};