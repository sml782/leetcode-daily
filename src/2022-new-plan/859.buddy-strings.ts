/**
 * 859. 亲密字符串
 * 
 * 给你两个字符串 s 和 goal ，只要我们可以通过交换 s 中的两个字母得到与 goal 相等的结果，就返回 true ；否则返回 false 。
 * 交换字母的定义是：取两个下标 i 和 j （下标从 0 开始）且满足 i != j ，接着交换 s[i] 和 s[j] 处的字符。
 * - 例如，在 "abcd" 中交换下标 0 和下标 2 的元素可以生成 "cbad" 。
 * 
 * @example 1
 * 输入：s = "ab", goal = "ba"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 相等。
 * 
 * @example 2
 * 输入：s = "ab", goal = "ab"
 * 输出：false
 * 解释：你只能交换 s[0] = 'a' 和 s[1] = 'b' 生成 "ba"，此时 s 和 goal 不相等。
 * 
 * @example 3
 * 输入：s = "aa", goal = "aa"
 * 输出：true
 * 解释：你可以交换 s[0] = 'a' 和 s[1] = 'a' 生成 "aa"，此时 s 和 goal 相等。
 * 
 * @example 4
 * 输入：s = "aaaaaaabc", goal = "aaaaaaacb"
 * 输出：true
 * 
 * @tip
 * 1 <= s.length, goal.length <= 2 * 104
 * s 和 goal 由小写英文字母组成
 * 
 * @see https://leetcode-cn.com/problems/buddy-strings/
 */

/**
 * 分 2 种情况判断
 * 
 * 1.两个字符串相等，那就看看里面有没有 2 个字母相等
 * 2.两个字符串不相等，那就看看里面有没有 2 个字母不相等
 *   - 有 2 个以下或者以上不相等，直接就不是
 *   - 有 2 个相等，看看这两个是否交叉相等
 *
 * @export
 * @param {string} s
 * @param {string} goal
 * @return {*}  {boolean}
 */
export function buddyStrings(s: string, goal: string): boolean {
  if (s.length !== goal.length) {
    return false;
  }

  let tempIndex = 0;

  if (s === goal) {
    const codeMap = new Map<string, boolean>();
    while (tempIndex < s.length) {
      if (codeMap.get(s[tempIndex])) {
        return true;
      }
      codeMap.set(s[tempIndex], true);
      tempIndex++;
    }
    return false;
  }

  let firstDifferentIndex = -1;
  let secondDifferentIndex = -1;

  while (tempIndex < s.length) {
    if (s[tempIndex] !== goal[tempIndex]) {
      if (firstDifferentIndex === -1) {
        firstDifferentIndex = tempIndex;
        tempIndex++;
        continue;
      }

      if (secondDifferentIndex === -1) {
        secondDifferentIndex = tempIndex;
        tempIndex++;
        continue;
      }

      return false;
    }
    tempIndex++;
  }

  return goal[secondDifferentIndex] === s[firstDifferentIndex] && s[secondDifferentIndex] === goal[firstDifferentIndex];
};