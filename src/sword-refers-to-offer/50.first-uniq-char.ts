/**
 * 剑指 Offer 50. 第一个只出现一次的字符
 * 
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。
 * 
 * @example
 * s = "abaccdeff"
 * 返回 "b"
 * s = ""
 * 返回 " "
 * 
 * @limit 0 <= s 的长度 <= 50000
 * 
 * @see https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 */


export function firstUniqChar(s: string): string {
  if (s.length === 0) {
    return ' ';
  }
  if (s.length === 1) {
    return s;
  }
  if (s.length === 2) {
    if (s.charAt(0) === s.charAt(1)) {
      return ' ';
    }
    return s.charAt(0);
  }
  for (let i = 0; i < s.length; i++) {
    const firstUnitS = s.charAt(i);
    if (i > 0) {
      const prevS = s.substr(0, i);
      if (prevS.match(firstUnitS)) {
        continue;
      }
    }
    if (i < s.length - 1) {
      const nextS = s.substr(i + 1);
      if (nextS.match(firstUnitS)) {
        continue;
      }
    }
    return firstUnitS;
  }
  return ' ';
};