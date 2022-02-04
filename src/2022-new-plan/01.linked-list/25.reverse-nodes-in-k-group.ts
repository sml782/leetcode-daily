/**
 * 25. K 个一组翻转链表
 * 
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 * k 是一个正整数，它的值小于或等于链表的长度。
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 * 
 * @up
 * 1.你可以设计一个只使用常数额外空间的算法来解决此问题吗？
 * 2.你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 * 
 * @example 1
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[2,1,4,3,5]
 * 
 * @example 2
 * 输入：head = [1,2,3,4,5], k = 3
 * 输出：[3,2,1,4,5]
 * 
 * @example 3
 * 输入：head = [1,2,3,4,5], k = 1
 * 输出：[1,2,3,4,5]
 * 
 * @example 4
 * 输入：head = [1], k = 1
 * 输出：[1]
 * 
 * @tip
 * 列表中节点的数量在范围 sz 内
 * 1 <= sz <= 5000
 * 0 <= Node.val <= 1000
 * 1 <= k <= sz
 * 
 * @see https://leetcode-cn.com/problems/reverse-nodes-in-k-group/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 翻转
 * 
 * @param {ListNode | null} head
 * @param {number} k
 * @return {ListNode | null}
 */
function reverseListByK(head: ListNode | null, k: number): (ListNode | null)[] {
  if (!head || k <= 1) {
    return [head, null];
  }

  // 判断够不够 k 个，够了才能翻转
  let headLength = k;
  let prevNode: ListNode | null = head;
  while (--headLength && prevNode) {
    prevNode = prevNode.next;
  }

  // 不够
  if (!prevNode) {
    return [head, null];
  }

  // 开始翻转
  let currentNode: ListNode | null = head;
  prevNode = null;
  while (k-- && currentNode) {
    const tempNode: ListNode | null = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode = tempNode;
  }

  // currentNode 就是剩下的节点，直接接回去就好
  head.next = currentNode;
  return [prevNode, head];
}

/**
 * 分组
 * 
 * @param {ListNode | null} head
 * @param {number} k
 * @return {ListNode | null}
 */
export function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if (!head || k <= 1) {
    return head;
  }

  const newHead = new ListNode(0, head);
  let preNode: ListNode | null = newHead;

  while (preNode?.next) {
    const [newNextNode, nextReverseList] = reverseListByK(preNode.next, k);
    preNode.next = newNextNode;
    preNode = nextReverseList;
    if (!preNode?.next) {
      break;
    }
  }

  return newHead.next;
};