/**
 * 剑指 Offer 24. 反转链表
 * 
 * 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
 * 
 * @example 示例:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 限制：
 * 0 <= 节点个数 <= 5000
 */


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import { ListNode } from '../lib/linked-list';

/**
 * NOTE: 两两互换
 * 
 * @export
 * @param {(ListNode | null)} head
 * @returns {(ListNode | null)}
 */
export function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) {
    return head;
  }

  let curNode: ListNode | null = head;
  let temp = null;
  while (curNode) {
    const next: ListNode | null = curNode.next;
    curNode.next = temp;
    temp = curNode;
    curNode = next;
  }

  return temp;
};