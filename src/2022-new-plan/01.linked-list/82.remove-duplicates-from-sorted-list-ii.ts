/**
 * 82. 删除排序链表中的重复元素 II
 * 
 * 给定一个已排序的链表的头 head ，删除原始链表中所有重复数字的节点，只留下不同的数字 。返回 已排序的链表 。
 * 
 * @example 1
 * 输入：head = [1,2,3,3,4,4,5]
 * 输出：[1,2,5]
 * 
 * @example 2
 * 输入：head = [1,1,1,2,3]
 * 输出：[2,3]
 * 
 * @tip
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 * 
 * @see https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list-ii/
 */

import { ListNode } from '../../lib/linked-list';

export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  const newHead = new ListNode(0, head);
  let tempNode: ListNode | null = newHead;

  while (tempNode.next && tempNode.next.next) {
    if (tempNode.next.val === tempNode.next.next.val) {
      const tempVal = tempNode.next.val;
      while (tempNode.next && tempNode.next.val === tempVal) {
        tempNode.next = tempNode.next.next;
      }
      continue;
    }
    tempNode = tempNode.next;
  }

  return newHead.next;
};
