/**
 * 622. 设计循环队列
 * 
 * 设计你的循环队列实现。 循环队列是一种线性数据结构，其操作表现基于 FIFO（先进先出）原则并且队尾被连接在队首之后以形成一个循环。它也被称为“环形缓冲器”。
 * 循环队列的一个好处是我们可以利用这个队列之前用过的空间。
 * 在一个普通队列里，一旦一个队列满了，我们就不能插入下一个元素，即使在队列前面仍有空间。但是使用循环队列，我们能使用这些空间去存储新的值。
 * 
 * 你的实现应该支持如下操作：
 * - MyCircularQueue(k): 构造器，设置队列长度为 k 。
 * - Front: 从队首获取元素。如果队列为空，返回 -1 。
 * - Rear: 获取队尾元素。如果队列为空，返回 -1 。
 * - enQueue(value): 向循环队列插入一个元素。如果成功插入则返回真。
 * - deQueue(): 从循环队列中删除一个元素。如果成功删除则返回真。
 * - isEmpty(): 检查循环队列是否为空。
 * - isFull(): 检查循环队列是否已满。
 * 
 * @example
 * MyCircularQueue circularQueue = new MyCircularQueue(3); // 设置长度为 3
 * circularQueue.enQueue(1);  // 返回 true
 * circularQueue.enQueue(2);  // 返回 true
 * circularQueue.enQueue(3);  // 返回 true
 * circularQueue.enQueue(4);  // 返回 false，队列已满
 * circularQueue.Rear();  // 返回 3
 * circularQueue.isFull();  // 返回 true
 * circularQueue.deQueue();  // 返回 true
 * circularQueue.enQueue(4);  // 返回 true
 * circularQueue.Rear();  // 返回 4
 * 
 * @tip
 * 所有的值都在 0 至 1000 的范围内；
 * 操作数将在 1 至 1000 的范围内；
 * 请不要使用内置的队列库。
 * 
 * @see https://leetcode-cn.com/problems/design-circular-queue/
 */

/**
 * 循环队列
 *
 * @export
 * @class MyCircularQueue
 */
export class MyCircularQueue {
  /**
   * 数据域
   *
   * @type {any[]}
   * @memberof MyCircularQueue
   */
  private datas: any[] = [];

  /**
   * 队列长度
   * 
   * @memberof MyCircularQueue
   */
  private maxLength = -1;

  /**
   * 头指针
   *
   * @memberof MyCircularQueue
   */
  private front = 0;

  /**
   * 尾指针
   *
   * @memberof MyCircularQueue
   */
  private rear = 0;

  /**
   * 数据真实长度
   *
   * @memberof MyCircularQueue
   */
  public size = 0;

  constructor(k: number) {
    this.maxLength = k;
    this.datas = Array.from({ length: k });
  }

  /**
   * 向循环队列插入一个元素。如果成功插入则返回真
   *
   * @param {number} value
   * @return {*}  {boolean}
   * @memberof MyCircularQueue
   */
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    this.datas[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxLength;
    this.size++;

    return true;
  }

  /**
   * 从循环队列中删除一个元素。如果成功删除则返回真
   *
   * @return {*}  {boolean}
   * @memberof MyCircularQueue
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }

    this.front = (this.front + 1) % this.maxLength;
    this.size--;

    return true;
  }

  /**
   * 从队首获取元素。如果队列为空，返回 -1
   *
   * @return {*}  {number}
   * @memberof MyCircularQueue
   */
  Front(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.datas[this.front];
  }

  /**
   * 获取队尾元素。如果队列为空，返回 -1
   *
   * @return {*}  {number}
   * @memberof MyCircularQueue
   */
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.datas[(this.rear - 1 + this.maxLength) % this.maxLength];
  }

  /**
   * 检查循环队列是否为空
   *
   * @return {*}  {boolean}
   * @memberof MyCircularQueue
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 检查循环队列是否已满
   *
   * @return {*}  {boolean}
   * @memberof MyCircularQueue
   */
  isFull(): boolean {
    return this.size === this.maxLength;
  }
}

/**
 * 测试队列
 *
 * @export
 * @param {string[]} operationList 操作函数列表
 * @param {any[]} paramList 实际参数列表
 */
export function testQueue<T>(operationList: ('MyCircularQueue' | Exclude<keyof MyCircularQueue, 'size'>)[], paramList: number[][]) {
  if (operationList.length !== paramList.length) {
    throw new Error('操作函数列表与实际参数不匹配');
  }

  let testClass = new MyCircularQueue(3);

  const result = operationList.map((operate, index) => {
    const currentParam = paramList[index];

    if (operate === 'MyCircularQueue') {
      testClass = new MyCircularQueue(currentParam[0]);
      return null;
    }

    const res = testClass[operate](currentParam[0]);
    return res;
  });

  return result;
}