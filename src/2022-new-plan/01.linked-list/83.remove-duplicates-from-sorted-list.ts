/**
 * 83. 删除排序链表中的重复元素
 * 
 * 给定一个已排序的链表的头 head, 删除所有重复的元素，使每个元素只出现一次 。返回 已排序的链表 。
 * 
 * @example 1
 * 输入：head = [1,1,2]
 * 输出：[1,2]
 * 
 * @example 2
 * 输入：head = [1,1,2,3,3]
 * 输出：[1,2,3]
 * 
 * @tip
 * 链表中节点数目在范围 [0, 300] 内
 * -100 <= Node.val <= 100
 * 题目数据保证链表已经按升序 排列
 * 
 * @see https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 循环暴力破解
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let currentHead: ListNode | null = head;

  while (currentHead.next) {
    const nextHead: ListNode | null = currentHead.next;
    if (currentHead.val === nextHead.val) {
      currentHead.next = nextHead.next;
      nextHead.next = null;
      continue;
    }

    currentHead = currentHead.next;
  }

  return head;
};

/**
 * 双指针
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function deleteDuplicates1(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const newHead = new ListNode(0, head);
  let prevNode: ListNode | null = newHead;
  let curNode: ListNode | null = newHead.next;

  while (prevNode && curNode) {
    if (prevNode.val === curNode.val) {
      curNode = curNode.next;
      prevNode.next = curNode;
      continue;
    }

    [prevNode, curNode] = [prevNode?.next, curNode.next];
  }

  return newHead.next;
};
