/**
 * 933. 最近的请求次数
 * 
 * 写一个 RecentCounter 类来计算特定时间范围内最近的请求。
 * 
 * 请你实现 RecentCounter 类：
 * - RecentCounter() 初始化计数器，请求数为 0 。
 * - int ping(int t) 在时间 t 添加一个新请求，其中 t 表示以毫秒为单位的某个时间，并返回过去 3000 毫秒内发生的所有请求数（包括新请求）。确切地说，返回在 [t-3000, t] 内发生的请求数。
 * 
 * 保证 每次对 ping 的调用都使用比之前更大的 t 值。
 * 
 * @example
 * 输入：
 * ["RecentCounter", "ping", "ping", "ping", "ping"]
 * [[], [1], [100], [3001], [3002]]
 * 输出：
 * [null, 1, 2, 3, 3]
 * 解释：
 * RecentCounter recentCounter = new RecentCounter();
 * recentCounter.ping(1);     // requests = [1]，范围是 [-2999,1]，返回 1
 * recentCounter.ping(100);   // requests = [1, 100]，范围是 [-2900,100]，返回 2
 * recentCounter.ping(3001);  // requests = [1, 100, 3001]，范围是 [1,3001]，返回 3
 * recentCounter.ping(3002);  // requests = [1, 100, 3001, 3002]，范围是 [2,3002]，返回 3
 * 
 * @tip
 * 1 <= t <= 109
 * 保证每次对 ping 调用所使用的 t 值都 严格递增
 * 至多调用 ping 方法 104 次
 * 
 * @see https://leetcode-cn.com/problems/number-of-recent-calls/
 */

import { MyCircularQueue } from './622.design-circular-queue';

/**
 * 使用队列实现
 *
 * @export
 * @class RecentCounter
 */
export class RecentCounter {
  /**
   * 最近请求历史记录
   *
   * @private
   * @memberof RecentCounter
   */
  private recentList = new MyCircularQueue(Number.POSITIVE_INFINITY);

  constructor() {
    //
  }

  ping(t: number): number {
    this.recentList.enQueue(t);
    while (this.recentList.Front() < t - 3000) {
      this.recentList.deQueue();
    }
    return this.recentList.size;
  }
}

/**
 * 使用数组实现
 *
 * @export
 * @class RecentCounter
 */
export class RecentCounter1 {
  /**
   * 最近请求历史记录
   *
   * @private
   * @type {number[]}
   * @memberof RecentCounter1
   */
  private recentList: number[] = [];

  constructor() {
    //
  }

  ping(t: number): number {
    this.recentList.push(t);
    while (this.recentList[0] < t - 3000) {
      this.recentList.shift();
    }
    return this.recentList.length;
  }
}