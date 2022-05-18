/**
 * 剑指 Offer 09. 用两个栈实现队列
 *
 * 用两个栈实现一个队列。
 * 队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能。
 * (若队列中没有元素，deleteHead 操作返回 -1 )
 *
 * @example 示例 1：
 * 输入：
 * ["CQueue","appendTail","deleteHead","deleteHead"]
 * [[],[3],[],[]]
 * 输出：
 * [null,null,3,-1]
 *
 * @example 示例 2：
 * 输入：
 * ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
 * [[],[],[5],[2],[],[]]
 * 输出：
 * [null,-1,null,null,5,2]
 *
 * 提示：
 * 1 <= values <= 10000
 * 最多会对 appendTail、deleteHead 进行 10000 次调用
 *
 * @see https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/
 */

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

export class CQueue {
  stack1: any[];
  stack2: any[];
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  appendTail(value: number): void {
    this.stack1.push(value);
  }

  deleteHead(): number {
    if (this.stack2.length > 0) {
      return this.stack2.pop();
    }
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }
    if (this.stack2.length === 0) {
      return -1;
    }
    return this.stack2.pop();
  }
}

export class CQueue1 {
  /**
   * 用于入队列
   *
   * @type {any[]}
   * @memberof CQueue1
   */
  private stack1: any[];

  /**
   * 用于出队列
   *
   * @type {any[]}
   * @memberof CQueue1
   */
  private stack2: any[];

  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  /**
   * 入队列
   *
   * @param {number} value
   * @memberof CQueue1
   */
  public appendTail(value: number): void {
    this.stack1.push(value);
  }

  /**
   * 出队列
   *
   * @return {*}  {number}
   * @memberof CQueue1
   */
  public deleteHead(): number {
    // 如果 stack2 不为空，则直接出栈
    if (this.stack2.length > 0) {
      return this.stack2.pop();
    }

    // 如果 stack2 为空，则将 stack1 中的元素全部出栈，并将其反转，再放入 stack2
    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }

    // 如果 stack2 为空，则返回 -1
    if (this.stack2.length === 0) {
      return -1;
    }

    // 如果 stack2 不为空，则出栈
    return this.stack2.pop();
  }
}
