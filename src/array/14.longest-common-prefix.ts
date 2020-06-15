/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 */

// 双层 for 循环, 利用正则查找
export function longestCommonPrefix(strs: string[]): string {
  const lens = strs.length;
  if (lens <= 1) {
    return strs[0] || '';
  }
  let commonPrefix = '';
  let diffStr = strs[0];
  for (let i = 1; i < lens; i++) {
    const curStr = strs[i];
    if (curStr === '') {
      return '';
    }
    if (i > 1) {
      diffStr = commonPrefix;
    }
    let strindex = commonPrefix.length;
    let prefix = commonPrefix;
    const prefixReg = new RegExp(`^${commonPrefix}`);
    const isMatch = prefixReg.test(curStr);
    if (!isMatch) {
      strindex = 0;
      prefix = '';
    }
    const minLens = Math.min(diffStr.length, curStr.length);
    for (; strindex < minLens; strindex++) {
      const str1 = diffStr.charAt(strindex);
      const str2 = curStr.charAt(strindex);
      if (str1 && str2 && str1 !== str2) {
        break;
      }
      prefix = `${prefix}${str1}`;
    }
    if (prefix === '') {
      return prefix;
    }
    commonPrefix = prefix;
  }
  return commonPrefix;
};

// 先排序, 利用 es6 数组的 every 找符合的
export function longestCommonPrefix1(strs: string[]): string {
  const lens = strs.length;
  if (lens <= 1) {
    return strs[0] || '';
  }
  strs.sort((a, b) => a.length - b.length);
  let commonPrefix = strs[0];
  while (commonPrefix !== '') {
    const isAllEqual = strs.every((item) => item.startsWith(commonPrefix));
    if (isAllEqual) {
      return commonPrefix;
    }
    commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
  }
  return commonPrefix;
};

// 先排序, 利用 es6 数组的 some 找不符合的
export function longestCommonPrefix2(strs: string[]): string {
  const lens = strs.length;
  if (lens <= 1) {
    return strs[0] || '';
  }
  strs.sort((a, b) => a.length - b.length);
  let commonPrefix = strs[0];
  while (commonPrefix !== '') {
    const hasNotEqual = strs.some((item) => !item.startsWith(commonPrefix));
    if (!hasNotEqual) {
      return commonPrefix;
    }
    commonPrefix = commonPrefix.slice(0, commonPrefix.length - 1);
  }
  return commonPrefix;
};