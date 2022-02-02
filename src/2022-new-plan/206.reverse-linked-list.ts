/**
 * 206. 反转链表
 * 
 * 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 * 
 * @example 1
 * 输入：head = [1,2,3,4,5]
 * 输出：[5,4,3,2,1]
 * 
 * @example 2
 * 输入：head = [1,2]
 * 输出：[2,1]
 * 
 * @example 3
 * 输入：head = []
 * 输出：[]
 * 
 * @tip
 * 链表中节点的数目范围是 [0, 5000]
 * -5000 <= Node.val <= 5000
 * 
 * @up
 * 链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？
 * 
 * @see https://leetcode-cn.com/problems/reverse-linked-list/
 */

import { ListNode } from '../lib/linked-list';

/**
 * 递归实现
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const prevHead: ListNode | null = head;
  const nextHead: ListNode | null = head.next;

  const tempHead = reverseList(head.next);

  prevHead.next = null;
  nextHead.next = prevHead;
  
  return tempHead;
};

/**
 * 迭代实现
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function reverseList1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let prevHead: ListNode | null = null;
  let nextHead: ListNode | null = head;

  while (nextHead) {
    const tempHead: ListNode | null = nextHead.next;

    nextHead.next = prevHead;

    prevHead = nextHead;
    nextHead = tempHead;
  }

  return prevHead;
};

export default {};

