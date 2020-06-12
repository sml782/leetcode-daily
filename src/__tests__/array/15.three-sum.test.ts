import { threeSum } from '../../array/15.three-sum';

type TestExp =  [number[], number[][]];

const testList: TestExp[] = [
  [[-1, 0, 1, 2, -1, -4], [[-1, 0, 1], [-1, -1, 2]]],
];

describe('15.[Array]三数之和', () => {
  // 暴力三层循环查找
  describe('暴力三层循环查找', () => {
    test.each(testList)('(%o): %i', (nums, res) => {
      const arrContain = res.map((item) => expect.arrayContaining(item));
      expect(threeSum(nums)).toEqual(arrContain);
    });
  });
});