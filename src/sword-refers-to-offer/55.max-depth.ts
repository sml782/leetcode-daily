/**
 * 剑指 Offer 55 - I. 二叉树的深度
 * 
 * 输入一棵二叉树的根节点，求该树的深度。
 * 从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
 * 
 * @example 给定二叉树 [3,9,20,null,null,15,7]
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 * 返回它的最大深度 3 。
 * 
 * @limit 节点总数 <= 10000
 * 
 * @see https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/
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
 * 递归实现
 *
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

/**
 * xxx
 *
 * @export
 * @param {(TreeNode | null)} root
 * @returns {number}
 */
export function maxDepth1(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const stackList: TreeNode[] = [];

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
