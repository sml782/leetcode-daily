/**
 * 剑指 Offer 28. 对称的二叉树
 * 
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 如果一棵二叉树和它的镜像一样，那么它是对称的。
 * 例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
 *     1
 *    / \
 *   2   2
 *  / \ / \
 * 3  4 4  3
 * 但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
 *     1
 *    / \
 *   2   2
 *    \   \
 *     3    3
 * 
 * @example 示例 1：
 * 输入：root = [1,2,2,3,4,4,3]
 * 输出：true
 * 
 * @example 示例 2：
 * 输入：root = [1,2,2,null,3,null,3]
 * 输出：false
 * 
 * @limit 0 <= 节点个数 <= 1000
 * 
 * @see https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 */


/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

import { TreeNode } from '../lib/binary-tree';

/**
 * NOTE: 递归实现
 * 
 * @param {TreeNode | null} root 
 */
export function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  function isMirror(node1: TreeNode | null, node2: TreeNode | null): boolean {
    if (node1 === null && node2 === null) {
      return true;
    }
    if (node1 === null || node2 === null) {
      return false;
    }
    if (!(node1.val === node2.val)) {
      return false;
    }
    if (!isMirror(node1.left, node2.right)) {
      return false;
    }
    return isMirror(node1.right, node2.left);
  }
  return isMirror(root.left, root.right);
};

/**
 * NOTE: 循环实现
 * 
 * TODO:
 *
 * @export
 * @param {(TreeNode | null)} root
 * @returns {boolean}
 */
export function isSymmetric1(root: TreeNode | null): boolean {
  if (root === null) {
    return true;
  }
  const nextLevelList: (TreeNode | null)[] = [root.left, root.right];
  function diffSsSymmetric(): boolean {
    if (nextLevelList.length === 0) {
      return true;
    }
    const midIdx = nextLevelList.length / 2;
    for (let idx = 0; idx < midIdx; idx++) {
      const mirrorIdx = nextLevelList.length - idx - 1;
      if (nextLevelList[idx] === null && nextLevelList[mirrorIdx] === null) {
        continue;
      }
      if (nextLevelList[idx] === null || nextLevelList[mirrorIdx] === null) {
        return false;
      }
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      if (nextLevelList[idx]!.val !== nextLevelList[mirrorIdx]!.val) {
        return false;
      }
    }
    return true;
  }
  function nextChildren() {
    if (nextLevelList.length === 0) {
      return;
    }
    nextLevelList.forEach((node) => {
      if (node === null) {
        nextLevelList.push(null, null);
        return;
      }
      nextLevelList.push(node.left || null, node.right || null);
    });
  }

  while (true) {
    const isMatch = diffSsSymmetric();
    if (isMatch) {
      
    }
    if (!isMatch) {
      return false;
    }
    if (done) {
      break;
    }
  }
  return true;
};