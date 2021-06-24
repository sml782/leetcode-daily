/**
 * 剑指 Offer 05. 替换空格
 * 
 * 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
 * 
 * @example 示例 1：
 * 输入：s = "We are happy."
 * 输出："We%20are%20happy."
 * 
 * @limit 0 <= s 的长度 <= 10000
 * 
 * @see https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 */


// NOTE: 正则，简单粗暴
export function replaceSpace(s: string): string {
  return s.replace(/\s/g, '%20');
};


export function replaceSpace1(s: string): string {
  if (s.length === 0) {
    return s;
  }

  let emptyNum = 0;
  let index = 0;

  while (index < s.length) {
    if (s.charAt(index) === ' ') {
      emptyNum ++;
    }
    index++;
  }

  const totalLength = s.length + emptyNum * 2;
  const strArr: string[] = new Array(totalLength);
  index = 0;
  let strIndex = 0;

  while (strIndex < s.length) {
    const ss = s.charAt(strIndex);
    if (s.charAt(strIndex) !== ' ') {
      strArr[index] = s.charAt(strIndex);
      index++;
    } else {
      strArr.splice(index, 0, '%', '2', '0');
      index += 3;
    }
    strIndex++;
  }

  return strArr.join('');
};