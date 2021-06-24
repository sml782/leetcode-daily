/**
 * 剑指 Offer 25. 合并两个排序的链表
 * 
 * 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
 * 
 * @example 示例1：
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 * 
 * @limit 0 <= 链表长度 <= 1000
 * 
 * @see https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
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
 * NOTE: 正常交换
 *
 * @export
 * @param {(ListNode | null)} l1
 * @param {(ListNode | null)} l2
 * @returns {(ListNode | null)}
 */
export function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }

  const isFirstLess = l1.val < l2.val;
  const newNode: ListNode | null = isFirstLess ? l1 : l2;
  let curNode: ListNode | null = newNode;
  let curNode1: ListNode | null = isFirstLess ? l1.next : l1;
  let curNode2: ListNode | null = isFirstLess ? l2 : l2.next;

  while (curNode1 || curNode2) {
    if (curNode1 && curNode2) {
      if (curNode1.val < curNode2.val) {
        curNode.next = curNode1;
        curNode1 = curNode1.next;
      } else {
        curNode.next = curNode2;
        curNode2 = curNode2.next;
      }
      curNode = curNode.next;
      continue;
    }
    curNode.next = curNode1 || curNode2;
    return newNode;
  }

  return newNode;
};
