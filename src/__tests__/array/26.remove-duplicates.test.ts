import { removeDuplicates, removeDuplicates1, removeDuplicates2 } from '../../array/26.remove-duplicates';

type TestExp =  [number[], number];

const testList: TestExp[] = [
  [[1,1,2], 2],
  [[0,0,1,1,1,2,2,3,3,4], 5],
];

describe('26.[Array]删除排序数组中的重复项', () => {
  // 1.splice 删除, 删除一个会让后面元素都往前移动
  describe('splice 删除, 删除一个会让后面元素都往前移动', () => {
    test.each(testList)('(%o): %i', (nums, res) => {
      expect(removeDuplicates(nums)).toBe(res);
    });
  });

  // 2.数组内部等
  describe('数组内部等', () => {
    test.each(testList)('(%o): %i', (nums, res) => {
      expect(removeDuplicates1(nums)).toBe(res);
    });
  });

  // 3.用一个变量记住上一次值, 防止多次取值
  describe('用一个变量记住上一次值, 防止多次取值', () => {
    test.each(testList)('(%o): %i', (nums, res) => {
      expect(removeDuplicates2(nums)).toBe(res);
    });
  });
});