/**
 * 剑指 Offer 27. 二叉树的镜像
 * 
 * 请完成一个函数，输入一个二叉树，该函数输出它的镜像。
 * @example 例如输入：
 *      4
 *    /   \
 *   2     7
 *  / \   / \
 * 1   3 6   9
 * 
 * 镜像输出：
 *      4
 *    /   \
 *   7     2
 *  / \   / \
 * 9   6 3   1
 * 
 * @example 示例 1：
 * 输入：root = [4,2,7,1,3,6,9]
 * 输出：[4,7,2,9,6,3,1]
 * 
 * 限制：
 * 0 <= 节点个数 <= 1000
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
 * NOTE: 递归解决
 * 内存占用大
 * 
 * @export
 * @param {(TreeNode | null)} root
 * @returns {(TreeNode | null)}
 */
export function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }

  if (!(root.left || root.right)) {
    return root;
  }

  [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)];
  
  return root;
};


/**
 * NOTE: 循环解决
 * 
 * 利用栈结构。只从同一头进出。
 * 
 * @export
 * @param {(TreeNode | null)} root
 * @returns {(TreeNode | null)}
 */
export function mirrorTree1(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  }

  const stack: TreeNode[] = [];

  function hasChild(node: TreeNode | null): boolean {
    if (node === null) {
      return false;
    }
    return !!(node.left || node.right);
  }

  stack.push(root);

  while (stack.length > 0) {
    const curNode = stack.pop();
    if (!curNode) {
      continue;
    }
    if (hasChild(curNode)) {
      [curNode.left, curNode.right] = [curNode.right, curNode.left];
    }
    if (curNode.left && hasChild(curNode.left)) {
      stack.push(curNode.left);
    }
    if (curNode.right && hasChild(curNode.right)) {
      stack.push(curNode.right);
    }
  }

  return root;
};