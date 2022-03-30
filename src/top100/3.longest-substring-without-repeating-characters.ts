/**
 * 3.无重复字符的最长子串
 * 
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 * 
 * @example 1
 * 输入: s = "abcabcbb"
 * 输出: 3 
 * 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 
 * @example 2
 * 输入: s = "bbbbb"
 * 输出: 1
 * 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 
 * @example 3
 * 输入: s = "pwwkew"
 * 输出: 3
 * 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
 * 请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 
 * @tip
 * 0 <= s.length <= 5 * 10^4
 * s 由英文字母、数字、符号和空格组成
 * 
 * @see https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 */

/**
 * 滑动窗口
 * 循环遍历
 * 
 * 顺序查找，如果有重复的从重复的后面开始继续查找
 * 最后，可能最后一个子串没有存储
 *
 * @export
 * @param {string} s
 * @return {*}  {number}
 */
export function lengthOfLongestSubstring(s: string): number {
  if (s.length < 2) {
    return s.length;
  }

  let maxLength = 0;
  let startIndex = 0;
  let endIndex = 1;

  for (let index = 1; index < s.length; index++) {
    const subList = s.substring(startIndex, endIndex);

    const appearIndex = subList.indexOf(s[index]);
    if (appearIndex === -1) {
      endIndex++;
      continue;
    }

    maxLength = Math.max(subList.length, maxLength);
    startIndex += appearIndex + 1;
    endIndex = index + 1;
  }

  if (maxLength === 0) {
    return s.length;
  }

  return Math.max(maxLength, endIndex - startIndex);
};

export function lengthOfLongestSubstring1(s: string): number {
  if (s.length < 2) {
    return s.length;
  }

  let maxLength = 0;
  let maxLengthStr = s.substring(0, 1);

  for (let index = 1; index < s.length; index++) {
    const appearIndex = maxLengthStr.indexOf(s[index]);
    if (appearIndex === -1) {
      maxLengthStr += s[index];
      continue;
    }

    maxLength = Math.max(maxLengthStr.length, maxLength);
    maxLengthStr = maxLengthStr.substring(appearIndex + 1) + s[index];
  }

  if (maxLength === 0) {
    return s.length;
  }

  return Math.max(maxLength, maxLengthStr.length);
};