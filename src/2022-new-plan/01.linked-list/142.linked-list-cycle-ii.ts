/**
 * 142.环形链表 II
 * 
 * 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 * 为了表示给定链表中的环，评测系统内部使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 * 如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 不允许修改 链表。
 * 
 * @example 1
 * 输入：head = [3,2,0,-4], pos = 1
 * 输出：返回索引为 1 的链表节点
 * 解释：链表中有一个环，其尾部连接到第二个节点。
 * 
 * @example 2
 * 输入：head = [1,2], pos = 0
 * 输出：返回索引为 0 的链表节点
 * 解释：链表中有一个环，其尾部连接到第一个节点。
 * 
 * @example 3
 * 输入：head = [1], pos = -1
 * 输出：返回 null
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
 * @see https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 快慢指针
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function detectCycle(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return null;
  }

  let slowHead: ListNode | null = head;
  let fastHead: ListNode | null = head.next;

  while (fastHead && fastHead.next && slowHead && fastHead !== slowHead) {
    slowHead = slowHead?.next;
    fastHead = fastHead.next.next;
  }

  if (slowHead !== fastHead) {
    return null;
  }

  slowHead = head;

  while (slowHead && fastHead && slowHead !== fastHead) {
    slowHead = slowHead.next;
    fastHead = fastHead.next;
  }

  return slowHead;
}


/**
 * 利用 hash 表，访问过的存入，只要有就说明有环
 * 
 * @param {ListNode | null} head
 * @return {ListNode | null}
 */
export function detectCycle1(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const lastMap = new Map<ListNode | null, boolean>();
  let tempHead: ListNode | null = head;

  while (tempHead) {
    if (lastMap.has(tempHead)) {
      return tempHead;
    }

    lastMap.set(tempHead, true);
    tempHead = tempHead.next;
  }

  return null;
};

 
 export default {};
 