
/**
 * 循环队列
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