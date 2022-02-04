/**
 * 24. 两两交换链表中的节点
 * 
 * 给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。
 * 你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）。
 * 
 * @example 1
 * 输入：head = [1,2,3,4]
 * 输出：[2,1,4,3]
 * 
 * @example 2
 * 输入：head = []
 * 输出：[]
 * 
 * @example 3
 * 输入：head = [1]
 * 输出：[1]
 * 
 * @tip
 * 链表中节点的数目在范围 [0, 100] 内
 * 0 <= Node.val <= 100
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 递归实现
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const newHead: ListNode | null = head.next;
  head.next = swapPairs(newHead.next);
  newHead.next = head;

  return newHead;
};


/**
 * 迭代
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function swapPairs1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const newHead = new ListNode(0, head);
  let tempNode: ListNode | null = newHead;

  while (tempNode?.next && tempNode?.next?.next) {
    const tNode1: ListNode | null = tempNode.next;
    const tNode2: ListNode | null = tempNode.next.next;
    
    tempNode.next = tNode2;
    tNode1.next = tNode2.next;
    tNode2.next = tNode1;

    tempNode = tNode1;
  }

  return newHead.next;
};