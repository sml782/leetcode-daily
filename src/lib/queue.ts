
/**
 * 普通队列
 *
 * @export
 * @class Queue
 */
export class Queue {
  public arr: any[] = [];

  /**
   * 头指针
   *
   * @memberof Queue
   */
  public head = 0;

  /**
   * 尾指针
   *
   * @memberof Queue
   */
  public tail = 0;

  constructor() {
    // TODO:
  }

  /**
   * 入队列
   *
   * @memberof Queue
   */
  public enqueue(val: any) {
    if (this.full()) {
      return;
    }

    this.arr[this.tail] = val;
    this.tail += 1;
  }

  /**
   * 出队列
   *
   * @return {*} 出队列的元素
   * @memberof Queue
   */
  public dequeue() {
    if (this.empty()) {
      return;
    }

    const headNode = this.arr.shift();
    this.head += 1;

    return headNode;
  }

  /**
   * 查看队首元素
   *
   * @return {*} 
   * @memberof Queue
   */
  public front() {
    if (this.empty()) {
      return null;
    }

    return this.arr[this.head];
  }

  /**
   * 队列是否满
   *
   * @return {*}  {boolean}
   * @memberof Queue
   */
  public full(): boolean {
    return this.tail === this.arr.length && this.size() > 0;
  }

  /**
   * 队列是否空
   *
   * @return {*}  {boolean}
   * @memberof Queue
   */
  public empty(): boolean {
    return false;
  }

  /**
   * 获取队列的长度
   *
   * @return {*} 
   * @memberof Queue
   */
  public size(): number {
    return this.tail - this.head;
  }

  /**
   * 打印当前队列
   *
   * @memberof Queue
   */
  public output(): void {
    const realQueue = this.arr.slice(this.head, this.tail);
    console.log(realQueue);
  }
}

/**
 * 循环队列
 *
 * @export
 * @class CircularQueue
 */
export class CircularQueue {
  /**
   * 数据域
   *
   * @type {any[]}
   * @memberof CircularQueue
   */
  public datas: any[] = [];

  /**
   * 队列长度
   * 
   * @memberof CircularQueue
   */
  public maxLength = -1;

  /**
   * 头指针
   *
   * @memberof CircularQueue
   */
  public front = 0;

  /**
   * 尾指针
   *
   * @memberof CircularQueue
   */
  public rear = 0;

  /**
   * 数据真实长度
   *
   * @memberof CircularQueue
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
   * @memberof CircularQueue
   */
  enQueue(value: number): boolean {
    if (this.isFull()) {
      return false;
    }

    // 如果空，则直接在 rear 指针上添加，反之则往后添加
    if (!this.isEmpty()) {
      this.rear = (this.rear + 1) % this.maxLength;
    }
    this.datas[this.rear] = value;
    return true;
  }

  /**
   * 从循环队列中删除一个元素。如果成功删除则返回真
   *
   * @return {*}  {boolean}
   * @memberof CircularQueue
   */
  deQueue(): boolean {
    if (this.isEmpty()) {
      return false;
    }
    
    this.front = (this.front + 1) % this.maxLength;
    return true;
  }

  /**
   * 从队首获取元素。如果队列为空，返回 -1
   *
   * @return {*}  {number}
   * @memberof CircularQueue
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
   * @memberof CircularQueue
   */
  Rear(): number {
    if (this.isEmpty()) {
      return -1;
    }
    return this.datas[this.rear];
  }

  /**
   * 检查循环队列是否为空
   *
   * @return {*}  {boolean}
   * @memberof CircularQueue
   */
  isEmpty(): boolean {
    return this.front === this.rear;
  }

  /**
   * 检查循环队列是否已满
   *
   * @return {*}  {boolean}
   * @memberof CircularQueue
   */
  isFull(): boolean {
    return this.front === (this.rear + 1) % this.maxLength;
  }
}
