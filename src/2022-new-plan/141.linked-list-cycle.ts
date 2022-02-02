/**
 * 141.环形链表
 * 
 * 给你一个链表的头节点 head ，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 注意：pos 不作为参数进行传递 。仅仅是为了标识链表的实际情况。
 * 如果链表中存在环 ，则返回 true 。 否则，返回 false 。
 * 
 * @example 1
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * @example 2
 * 输入：head = [1,2], pos = 0
 * 输出：true
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * @example 3
 * 输入：head = [1], pos = -1
 * 输出：false
 * 解释：链表中没有环。
 * 
 * @tip
 * 表中节点的数目范围是 [0, 10^4]
 * -10^5 <= Node.val <= 10^5
 * pos 为 -1 或者链表中的一个 有效索引 。
 * 
 * @up
 * 你能用 O(1)（即，常量）内存解决此问题吗？
 * 
 * @see https://leetcode-cn.com/problems/linked-list-cycle/
 */

import { ListNode } from '../lib/linked-list';

/**
 * 快慢指针
 * 
 * @see https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode-solution/
 * 
 * @param {ListNode | null} head
 * @return {boolean}
 */
export function hasCycle(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  let slowHead: ListNode | null = head;
  let fastHead: ListNode | null = head.next;

  while (fastHead && fastHead.next && slowHead && slowHead !== fastHead) {
    slowHead = slowHead.next;
    fastHead = fastHead.next.next;
  }

  return slowHead === fastHead;
};

/**
 * 利用 hash 表，访问过的存入，只要有就说明有环
 * 
 * @param {ListNode | null} head
 * @return {boolean}
 */
export function hasCycle1(head: ListNode | null): boolean {
  if (!head) {
    return false;
  }

  const lastMap = new Map<ListNode | null, boolean>();
  let tempHead: ListNode | null = head;

  while (tempHead) {
    if (lastMap.has(tempHead)) {
      return true;
    }

    lastMap.set(tempHead, true);
    tempHead = tempHead.next;
  }

  return false;
};

export default {};
