/**
 * 94. 二叉树的中序遍历
 * 
 * 给定一个二叉树的根节点 root ，返回 它的 中序 遍历 。
 * 
 * @example 1
 * 输入：root = [1,null,2,3]
 * 输出：[1,3,2]
 * 
 * @example 2
 * 输入：root = []
 * 输出：[]
 * 
 * @example 3
 * 输入：root = [1]
 * 输出：[1]
 * 
 * @tip
 * 树中节点数目在范围 [0, 100] 内
 * -100 <= Node.val <= 100
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 * @see https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
*/

import { TreeNode } from '../lib/binary-tree';

/**
 * 递归实现
 *
 * @export
 * @param {(TreeNode | null)} root
 * @return {*}  {number[]}
 */
export function inorderTraversal(root: TreeNode | null, traverseList: number[] = []): number[] {
  if (!root) {
    return traverseList;
  }

  inorderTraversal(root.left, traverseList);
  traverseList.push(root.val);
  inorderTraversal(root.right, traverseList);

  return traverseList;
};

/**
 * 迭代实现
 * 
 * 1.先左边深度优先
 * 2.再中间，最后迭代右边的左深度
 * 3.重复上面步骤
 *
 * @export
 * @param {(TreeNode | null)} root
 * @return {*}  {number[]}
 */
export function inorderTraversal1(root: TreeNode | null): number[] {
  if (!root) {
    return [];
  }

  const traverseList: number[] = [];
  const stackList: (TreeNode | null)[] = [];

  while (root || stackList.length) {
    while (root) {
      stackList.push(root);
      root = root.left;
    }

    root = stackList.pop()!;
    traverseList.push(root.val);
    root = root.right;
  }

  return traverseList;
};