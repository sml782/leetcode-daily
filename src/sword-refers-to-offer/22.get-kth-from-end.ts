/**
 * 剑指 Offer 22. 链表中倒数第k个节点
 * 
 * 输入一个链表，输出该链表中倒数第k个节点。
 * 为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
 * 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。
 * 这个链表的倒数第3个节点是值为4的节点。
 * 
 * @example 示例：
 * 给定一个链表: 1->2->3->4->5, 和 k = 2.
 * 返回链表 4->5.
 * 
 * @see https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
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


export function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head || k < 1) {
    return null;
  }
  const cacheList: Map<number, ListNode> = new Map;
  let curNode: ListNode | null = head;
  let index = 0;
  while (curNode) {
    cacheList.set(index++, curNode);
    curNode = curNode.next;
  }
  if (k > cacheList.size) {
    return null;
  }
  const node = cacheList.get(cacheList.size - k);
  if (!node) {
    return null;
  }
  return node;
};