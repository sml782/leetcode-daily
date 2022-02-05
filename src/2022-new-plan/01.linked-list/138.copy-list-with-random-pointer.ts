/**
 * 138. 复制带随机指针的链表
 * 
 * 给你一个长度为 n 的链表，每个节点包含一个额外增加的随机指针 random ，该指针可以指向链表中的任何节点或空节点。
 * 
 * 构造这个链表的 深拷贝。 深拷贝应该正好由 n 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。
 * 新节点的 next 指针和 random 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。
 * 
 * 例如，如果原链表中有 X 和 Y 两个节点，其中 X.random --> Y 。那么在复制链表中对应的两个节点 x 和 y ，同样有 x.random --> y 。
 * 返回复制链表的头节点。
 * 
 * 用一个由 n 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 [val, random_index] 表示：
 * - val：一个表示 Node.val 的整数。
 * - random_index：随机指针指向的节点索引（范围从 0 到 n-1）；如果不指向任何节点，则为  null 。
 * 
 * 你的代码 只 接受原链表的头节点 head 作为传入参数。
 * 
 * @example 1
 * 输入：head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 输出：[[7,null],[13,0],[11,4],[10,2],[1,0]]
 * 
 * @example 2
 * 输入：head = [[1,1],[2,1]]
 * 输出：[[1,1],[2,1]]
 * 
 * @example 3
 * 输入：head = [[3,null],[3,0],[3,null]]
 * 输出：[[3,null],[3,0],[3,null]]
 * 
 * @tip
 * 0 <= n <= 1000
 * -10^4 <= Node.val <= 10^4
 * Node.random 为 null 或指向链表中的节点。
 * 
 * @see https://leetcode-cn.com/problems/copy-list-with-random-pointer/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */
class Node extends ListNode {

  next: Node | null = null;

  random: Node | null;

  constructor(val?: number, next?: Node, random?: Node) {
    super(val, next);

    this.random = (random === undefined ? null : random);
  }
}

/**
 * 暴力破解
 * 1.先不管 random 从头复制一遍，并存入 hash 表
 * 2.再次便利把 random 指向恢复
 *
 * @export
 * @param {(Node | null)} head
 * @return {*}  {(Node | null)}
 */
export function copyRandomList(head: Node | null): Node | null {
  if (!head || !head.next) {
    return head;
  }

  const hashMap = new Map<Node | null, Node | null>();
  let newHead: Node | null = null;
  let currentNode: Node = head;
  let tempNode: Node | null = head;

  while (tempNode) {
    const newNode = new Node(
      tempNode.val,
      tempNode.next || undefined,
      tempNode.random || undefined
    );

    if (!newHead) {
      newHead = newNode;
    } else {
      currentNode.next = newNode;
    }

    currentNode = newNode;

    hashMap.set(tempNode, newNode);
    tempNode = tempNode.next;
  }

  let randomNode: Node | null = newHead;

  while (randomNode) {
    if (randomNode.random) {
      randomNode.random = hashMap.get(randomNode.random) || null;
    }
    randomNode = randomNode.next;
  }

  return newHead;
};