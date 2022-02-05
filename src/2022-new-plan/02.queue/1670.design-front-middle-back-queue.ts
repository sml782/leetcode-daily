/**
 * 1670. 设计前中后队列
 * 
 * ! TODO: 暂时搁置
 * 
 * 请你设计一个队列，支持在前，中，后三个位置的 push 和 pop 操作。
 * 
 * 请你完成 FrontMiddleBack 类：
 * - FrontMiddleBack() 初始化队列。
 * - void pushFront(int val) 将 val 添加到队列的 最前面 。
 * - void pushMiddle(int val) 将 val 添加到队列的 正中间 。
 * - void pushBack(int val) 将 val 添加到队里的 最后面 。
 * - int popFront() 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 * - int popMiddle() 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 * - int popBack() 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1 。
 * 
 * 请注意当有 两个 中间位置的时候，选择靠前面的位置进行操作。比方说：
 * - 将 6 添加到 [1, 2, 3, 4, 5] 的中间位置，结果数组为 [1, 2, 6, 3, 4, 5] 。
 * - 从 [1, 2, 3, 4, 5, 6] 的中间位置弹出元素，返回 3 ，数组变为 [1, 2, 4, 5, 6] 。
 * 
 * 输入：
 * ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
 * [[], [1], [2], [3], [4], [], [], [], [], []]
 * 输出：
 * [null, null, null, null, null, 1, 3, 4, 2, -1]
 * 解释：
 * FrontMiddleBackQueue q = new FrontMiddleBackQueue();
 * q.pushFront(1);   // [1]
 * q.pushBack(2);    // [1, 2]
 * q.pushMiddle(3);  // [1, 3, 2]
 * q.pushMiddle(4);  // [1, 4, 3, 2]
 * q.popFront();     // 返回 1 -> [4, 3, 2]
 * q.popMiddle();    // 返回 3 -> [4, 2]
 * q.popMiddle();    // 返回 4 -> [2]
 * q.popBack();      // 返回 2 -> []
 * q.popFront();     // 返回 -1 -> [] （队列为空）
 * 
 * @tip
 * 1 <= val <= 10^9
 * 最多调用 1000 次 pushFront， pushMiddle， pushBack， popFront， popMiddle 和 popBack 
 * 
 * @see https://leetcode-cn.com/problems/design-front-middle-back-queue/
 */

import { ListNode } from '../../lib/linked-list';

/**
 * 前中后队列
 *
 * @export
 * @class FrontMiddleBackQueue
 */
export class FrontMiddleBackQueue {
  /**
   * 数据域
   *
   * @private
   * @type {(ListNode | null)}
   * @memberof FrontMiddleBackQueue
   */
  private datas: ListNode = new ListNode();

  /**
   * 数据的长度
   *
   * @private
   * @memberof FrontMiddleBackQueue
   */
  private size = 0;

  /**
   * 头指针
   *
   * @private
   * @type {(ListNode | null)}
   * @memberof FrontMiddleBackQueue
   */
  private front: ListNode | null = this.datas.next;

  /**
   * 尾指针
   *
   * @private
   * @type {(ListNode | null)}
   * @memberof FrontMiddleBackQueue
   */
  private rear: ListNode | null = this.datas.next;

  /**
   * 中指针
   *
   * @private
   * @type {(ListNode | null)}
   * @memberof FrontMiddleBackQueue
   */
  private mid: ListNode | null = this.datas.next;

  constructor() {
    //
  }

  getMidNode(isPop = false) {
    if (this.size === 0) {
      return this.datas;
    }

    let midIndex = Math.floor(this.size / 2) - 1;
    if (isPop) {
      midIndex = Math.floor(this.size / 2) - 2;
    }
    if (midIndex < -1) {
      midIndex = -1;
    }

    let tempNode: ListNode | null = this.datas;
    while (tempNode && midIndex-- === -1) {
      tempNode = tempNode.next;
    }

    return tempNode;
  }

  /**
   * 将 val 添加到队列的 最前面
   *
   * @param {number} val
   * @memberof FrontMiddleBackQueue
   */
  pushFront(val: number): void {
    const tempNext = this.datas.next;
    const newNode = new ListNode(val, tempNext);

    if (!this.datas.next) {
      this.rear = newNode;
    }

    this.datas.next = newNode;
    this.front = newNode;

    this.size++;
  }

  /**
   * 将 val 添加到队列的 正中间
   *
   * @param {number} val
   * @memberof FrontMiddleBackQueue
   */
  pushMiddle(val: number): void {
    const midNode = this.getMidNode();
    const tempNext = midNode?.next;

    if (!midNode) {
      return;
    }

    const newNode = new ListNode(val, tempNext);

    if (!this.datas.next) {
      this.rear = newNode;
      this.front = newNode;
    }

    midNode.next = newNode;

    this.size++;
  }

  /**
   * 将 val 添加到队里的 最后面
   *
   * @param {number} val
   * @memberof FrontMiddleBackQueue
   */
  pushBack(val: number): void {
    const newNode = new ListNode(val);

    if (!this.datas.next || !this.rear) {
      this.front = newNode;
      this.datas.next = newNode;
    } else {
      this.rear.next = newNode;
    }
    
    this.rear = newNode;

    this.size++;
  }

  /**
   * 将 最前面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1
   *
   * @return {*}  {number}
   * @memberof FrontMiddleBackQueue
   */
  popFront(): number {
    if (this.size === 0) {
      return -1;
    }

    if (!this.front) {
      return -1;
    }

    const tempNode = this.front;
    this.datas.next = this.front.next;
    this.front = this.front.next;
    
    return tempNode.val;
  }

  /**
   * 将 正中间 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1
   *
   * @return {*}  {number}
   * @memberof FrontMiddleBackQueue
   */
  popMiddle(): number {
    if (this.size === 0) {
      return -1;
    }

    const midNode = this.getMidNode();

    if (!midNode) {
      return -1;
    }

    const tempNode = midNode.next;
    if (!tempNode) {
      this.datas.next = null;
      this.front = null;
      this.rear = null;

      return -1;
    }

    // midNode.next = 

    return this.datas[this.mid];
  }

  /**
   * 将 最后面 的元素从队列中删除并返回值，如果删除之前队列为空，那么返回 -1
   *
   * @return {*}  {number}
   * @memberof FrontMiddleBackQueue
   */
  popBack(): number {
    if (this.size === 0) {
      return -1;
    }
    return this.datas[this.rear];
  }
}
