import { removeElement, removeElement1 } from '../../array/27.remove-element';

type TestExp =  [number[], number, number];

const testList: TestExp[] = [
  [[3,2,2,3], 3, 2],
  [[0,1,2,2,3,0,4,2], 2, 5],
];

describe('27.[Array]移除元素', () => {
  // 使用 splice 删除
  describe('splice 删除', () => {
    test.each(testList)('(%o, %i): %i', (nums, val, res) => {
      expect(removeElement(nums, val)).toBe(res);
    });
  });

  // 不为目标值的往前移动
  describe('不为目标值的往前移动', () => {
    test.each(testList)('(%o, %i): %i', (nums, val, res) => {
      expect(removeElement1(nums, val)).toBe(res);
    });
  });
});