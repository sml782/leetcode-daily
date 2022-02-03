/**
 * 92. 反转链表 II
 * 
 * 给你单链表的头指针 head 和两个整数 left 和 right ，其中 left <= right 
 * 请你反转从位置 left 到位置 right 的链表节点，返回 反转后的链表 。
 * 
 * @example 1
 * 输入：head = [1,2,3,4,5], left = 2, right = 4
 * 输出：[1,4,3,2,5]
 * 
 * @example 2
 * 输入：head = [5], left = 1, right = 1
 * 输出：[5]
 * 
 * @example 3
 * 链表中节点数目为 n
 * 1 <= n <= 500
 * -500 <= Node.val <= 500
 * 1 <= left <= right <= n
 * 
 * @see https://leetcode-cn.com/problems/reverse-linked-list-ii/
 */

import { ListNode } from '../lib/linked-list';

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let prevNode: ListNode | null = null;
  let currentNode: ListNode | null = head;

  while (currentNode) {
    const tempNode: ListNode | null = currentNode.next;

    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = tempNode;
  }

  return prevNode;
}

/**
 * 迭代实现
 * 1.先找到翻转部分
 * 2.断开相应翻转部分
 * 3.翻转需要翻转的部分
 * 4.接回原来的部分到主分支上
 * 
 * @param {ListNode | null} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode | null}
 */
export function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (!head || left === right) {
    return head;
  }

  const newHead: ListNode = new ListNode(0);
  newHead.next = head;

  let rIndex = 0;
  let leftNode: ListNode | null = newHead;

  while (rIndex < left - 1 && leftNode && leftNode.next) {
    rIndex++;
    leftNode = leftNode.next;
  }

  let rightNode: ListNode | null = leftNode || null;

  while (rIndex < right && rightNode && rightNode.next) {
    rIndex++;
    rightNode = rightNode.next;
  }

  let reverseHead: ListNode | null = leftNode?.next || null;

  if (!leftNode || !reverseHead) {
    return head;
  }

  leftNode.next = null;
  const tempNode: ListNode | null = rightNode.next;
  rightNode.next = null;

  reverseHead = reverseList(reverseHead);

  if (!reverseHead) {
    return head;
  }

  let lastNode = reverseHead;

  while (lastNode.next) {
    lastNode = lastNode.next;
  }

  leftNode.next = reverseHead;
  lastNode.next = tempNode;

  return newHead.next;
};