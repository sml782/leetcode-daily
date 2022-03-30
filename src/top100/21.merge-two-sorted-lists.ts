/**
 * 21.合并两个有序链表
 * 
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 * 
 * @example 1
 * 输入：l1 = [1,2,4], l2 = [1,3,4]
 * 输出：[1,1,2,3,4,4]
 * 
 * @example 2
 * 输入：l1 = [], l2 = []
 * 输出：[]
 * 
 * @example 3
 * 输入：l1 = [], l2 = [0]
 * 输出：[0]
 * 
 * @tip
 * 两个链表的节点数目范围是 [0, 50]
 * -100 <= Node.val <= 100
 * l1 和 l2 均按 非递减顺序 排列
 * 
 * @see https://leetcode-cn.com/problems/merge-two-sorted-lists/
 */

import { ListNode } from '../lib/linked-list';

/**
 * 迭代实现
 * 
 * 依次判断两个链表元素大小加入
 *
 * @export
 * @param {(ListNode | null)} list1
 * @param {(ListNode | null)} list2
 * @return {*}  {(ListNode | null)}
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) {
    return null;
  }

  if (!list1) {
    return list2;
  }

  if (!list2) {
    return list1;
  }

  const newHead = new ListNode(-1);
  let currentNode: ListNode | null = newHead;
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }

  currentNode.next = list1 || list2;

  return newHead.next;
};