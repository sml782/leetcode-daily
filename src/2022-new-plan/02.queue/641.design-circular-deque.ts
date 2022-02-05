/**
 * 641. 设计循环双端队列
 * 
 * 设计实现双端队列。
 * 
 * 你的实现需要支持以下操作：
 * - MyCircularDeque(k)：构造函数,双端队列的大小为k。
 * - insertFront()：将一个元素添加到双端队列头部。 如果操作成功返回 true。
 * - insertLast()：将一个元素添加到双端队列尾部。如果操作成功返回 true。
 * - deleteFront()：从双端队列头部删除一个元素。 如果操作成功返回 true。
 * - deleteLast()：从双端队列尾部删除一个元素。如果操作成功返回 true。
 * - getFront()：从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
 * - getRear()：获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
 * - isEmpty()：检查双端队列是否为空。
 * - isFull()：检查双端队列是否满了。
 * 
 * @example
 * MyCircularDeque circularDeque = new MycircularDeque(3); // 设置容量大小为3
 * circularDeque.insertLast(1);			        // 返回 true
 * circularDeque.insertLast(2);			        // 返回 true
 * circularDeque.insertFront(3);			        // 返回 true
 * circularDeque.insertFront(4);			        // 已经满了，返回 false
 * circularDeque.getRear();  				// 返回 2
 * circularDeque.isFull();				        // 返回 true
 * circularDeque.deleteLast();			        // 返回 true
 * circularDeque.insertFront(4);			        // 返回 true
 * circularDeque.getFront();				// 返回 4
 * 
 * @tip
 * 所有值的范围为 [1, 1000]
 * 操作次数的范围为 [1, 1000]
 * 请不要使用内置的双端队列库。
 * 
 * @see https://leetcode-cn.com/problems/design-circular-deque/
 */

/**
 * 双端队列
 *
 * @export
 * @class MyCircularDeque
 */
export class MyCircularDeque {
  /**
   * 数据域
   *
   * @private
   * @type {number[]}
   * @memberof MyCircularDeque
   */
  private datas: number[] = [];

  /**
   * 最大长度
   *
   * @private
   * @type {number}
   * @memberof MyCircularDeque
   */
  private maxSize: number;

  /**
   * 头指针
   *
   * @private
   * @memberof MyCircularDeque
   */
  private front = 0;

  /**
   * 尾指针
   *
   * @private
   * @memberof MyCircularDeque
   */
  private rear = 0;

  /**
   * 数据真实长度
   *
   * @private
   * @memberof MyCircularDeque
   */
  private size = 0;

  constructor(k: number) {
    this.maxSize = k;
    this.datas = Array.from({ length: k });
  }

  /**
   * 将一个元素添加到双端队列头部。 如果操作成功返回 true。
   *
   * @param {number} value
   * @return {*}  {boolean}
   * @memberof MyCircularDeque
   */
  insertFront(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    if (this.front !== this.rear) {
      this.front = (this.front - 1 + this.maxSize) % this.maxSize;
    } else {
      this.rear = (this.rear + 1) % this.maxSize;
    }
    this.datas[this.front] = value;
    this.size++;
    return true;
  }

  /**
   * 将一个元素添加到双端队列尾部。如果操作成功返回 true。
   *
   * @param {number} value
   * @return {*}  {boolean}
   * @memberof MyCircularDeque
   */
  insertLast(value: number): boolean {
    if (this.isFull()) {
      return false;
    }
    this.datas[this.rear] = value;
    this.rear = (this.rear + 1) % this.maxSize;
    this.size++;
    return true;
  }

  /**
   * 从双端队列头部删除一个元素。 如果操作成功返回 true。
   *
   * @return {*}  {boolean}
   * @memberof MyCircularDeque
   */
  deleteFront(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.front = (this.front + 1) % this.maxSize;
    this.size--;
    return true;
  }

  /**
   * 从双端队列尾部删除一个元素。如果操作成功返回 true。
   *
   * @return {*}  {boolean}
   * @memberof MyCircularDeque
   */
  deleteLast(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    this.rear = (this.rear - 1 + this.maxSize) % this.maxSize;
    this.size--;
    return true;
  }

  /**
   * 从双端队列头部获得一个元素。如果双端队列为空，返回 -1。
   *
   * @return {*}  {number}
   * @memberof MyCircularDeque
   */
  getFront(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.datas[this.front];
  }

  /**
   * 获得双端队列的最后一个元素。 如果双端队列为空，返回 -1。
   *
   * @return {*}  {number}
   * @memberof MyCircularDeque
   */
  getRear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.datas[(this.rear - 1 + this.maxSize) % this.maxSize];
  }

  /**
   * 检查双端队列是否为空。
   *
   * @return {*}  {boolean}
   * @memberof MyCircularDeque
   */
  isEmpty(): boolean {
    return this.size === 0;
  }

  /**
   * 检查双端队列是否满了。
   *
   * @return {*}  {boolean}
   * @memberof MyCircularDeque
   */
  isFull(): boolean {
    return this.size === this.maxSize;
  }
}

/**
 * 测试队列
 *
 * @export
 * @param {string[]} operationList 操作函数列表
 * @param {any[]} paramList 实际参数列表
 */
 export function testQueue<T>(operationList: ('MyCircularDeque' | keyof MyCircularDeque)[], paramList: number[][]) {
  if (operationList.length !== paramList.length) {
    throw new Error('操作函数列表与实际参数不匹配');
  }

  let testClass = new MyCircularDeque(3);

  const result = operationList.map((operate, index) => {
    const currentParam = paramList[index];

    if (operate === 'MyCircularDeque') {
      testClass = new MyCircularDeque(currentParam[0]);
      return null;
    }

    const res = testClass[operate](currentParam[0]);
    return res;
  });

  return result;
}