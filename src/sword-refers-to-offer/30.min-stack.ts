/**
 * 剑指 Offer 30. 包含min函数的栈
 * 
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈的最小元素的 min 函数在该栈中，调用 min、push 及 pop 的时间复杂度都是 O(1)。
 * 
 * @example 示例:
 * MinStack minStack = new MinStack();
 * minStack.push(-2);
 * minStack.push(0);
 * minStack.push(-3);
 * minStack.min();   --> 返回 -3.
 * minStack.pop();
 * minStack.top();      --> 返回 0.
 * minStack.min();   --> 返回 -2.
 * 
 * 提示：
 * 各函数的调用总次数不超过 20000 次
 * 
 * @see https://leetcode-cn.com/problems/bao-han-minhan-shu-de-zhan-lcof/
 */



/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */


/**
 * pop或者top的时候：
 * 1.如果栈顶元素小于0，说明栈顶是当前最小的元素，它出栈会对min造成影响，我们需要去更新min。
 * 上一个最小的是“min - 栈顶元素”,我们需要将上一个最小值更新为当前的最小值
 * 因为栈顶元素入栈的时候的通过 栈顶元素 = 真实值 - 上一个最小的元素 得到的，
 * 而真实值 = min， 因此可以得出上一个最小的元素 = 真实值 -栈顶元素
 * 2.如果栈顶元素大于0，说明它对最小值没有影响，上一个最小值就是上上个最小值。
 * 
 * 最小栈存储的不应该是真实值，而是真实值和min的差值
 * top的时候涉及到对数据的还原，这里千万注意是上一个最小值
 * 
 * 
 *
 * @export
 * @class MinStack
 */
export class MinStack {
  private stack: number[] = [];

  private minValue = Number.MAX_SAFE_INTEGER;

  push(x: number): void {
    // if (this.stack.length === 0) {
    //   this.minValue = x;
    //   this.stack.push(x);
    //   return;
    // }
    const prevMin = this.minValue;
    if (x < prevMin) {
      this.minValue = x;
    }
    this.stack.push(x - prevMin);
  }

  pop(): number | null {
    if (this.stack.length === 0) {
      return null;
    }
    const prevMin = this.minValue;
    const popItem = this.stack.pop() as number;
    if (popItem < 0) {
      this.minValue = prevMin - popItem;
      return prevMin;
    }
    return popItem + prevMin;
  }

  top(): number | null {
    const length = this.stack.length;
    if (length === 0) {
      return null;
    }
    const item = this.stack[length - 1];
    if (item < 0) {
      return this.minValue;
    }
    return item + this.minValue;
  }

  min(): number | null {
    return this.minValue;
  }
}