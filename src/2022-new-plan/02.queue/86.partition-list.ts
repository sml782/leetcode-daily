/**
 * 86. 分隔链表
 * 
 * 给你一个链表的头节点 head 和一个特定值 x ，请你对链表进行分隔，使得所有 小于 x 的节点都出现在 大于或等于 x 的节点之前。
 * 你应当 保留 两个分区中每个节点的初始相对位置。
 * 
 * @example 1
 * 输入：head = [1,4,3,2,5,2], x = 3
 * 输出：[1,2,2,4,3,5]
 * 
 * @example 2
 * 输入：head = [2,1], x = 2
 * 输出：[1,2]
 * 
 * @tip
 * 链表中节点的数目在范围 [0, 200] 内
 * -100 <= Node.val <= 100
 * -200 <= x <= 200
 * 
 * @see https://leetcode-cn.com/problems/partition-list/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 迭代
 * 1.取得特定值之前链表段
 * 2.断开与特定节点之间的联系
 * 3.转移小节点
 * 4.接回去
 *
 * @export
 * @param {(ListNode | null)} head
 * @param {number} x
 * @return {*}  {(ListNode | null)}
 */
export function partition(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const newHead = new ListNode(0, head);
  let prevNode: ListNode | null = newHead;

  // 取得特定值之前链表段
  while (prevNode.next) {
    if (prevNode.next.val >= x) {
      break;
    }
    prevNode = prevNode.next;
  }

  // 没找到具体特定值节点，不需要分隔
  if (!prevNode.next) {
    return head;
  }

  // 断开与特定节点之间的联系
  const tempHead: ListNode | null = prevNode.next;
  let tempNode: ListNode | null = tempHead;
  prevNode.next = null;

  // 开始转移
  while (tempNode.next) {
    if (tempNode.next.val < x) {
      prevNode.next = tempNode.next;
      prevNode = tempNode.next;
      tempNode.next = tempNode.next.next;
      continue;
    }

    tempNode = tempNode.next;
  }

  // 接回去
  prevNode.next = tempHead;

  return newHead.next;
};

/**
 * 分组维护 2 个链表
 * 1.分组
 * 2.大的接到小的
 *
 * @export
 * @param {(ListNode | null)} head
 * @param {number} x
 * @return {*}  {(ListNode | null)}
 */
export function partition1(head: ListNode | null, x: number): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const smallHead = new ListNode(0);
  const largeHead = new ListNode(0);
  let smallNode: ListNode | null = smallHead;
  let largeNode: ListNode | null = largeHead;
  let tempNode: ListNode | null = head;

  while (tempNode) {
    if (tempNode.val < x) {
      smallNode.next = tempNode;
      smallNode = smallNode.next;
    } else {
      largeNode.next = tempNode;
      largeNode = largeNode.next;
    }

    tempNode = tempNode.next;
  }
  
  largeNode.next = null;
  smallNode.next = largeHead.next;

  return smallHead.next;
};