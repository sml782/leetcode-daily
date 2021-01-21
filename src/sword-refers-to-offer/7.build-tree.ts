/**
 * 剑指 Offer 07. 重建二叉树
 * 
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建该二叉树。
 * 假设输入的前序遍历和中序遍历的结果中都不含重复的数字。
 * 
 * @example 例如，给出
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 * 
 * 返回如下的二叉树：
 *   3
 *  / \
 * 9  20
 *   /  \
 *  15   7
 * 
 * 限制：
 * 0 <= 节点个数 <= 5000
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right=== undefined ? null : right);
  }
}

/**
 * NOTE: 分两部分去构建
 * 在先序遍历中找根，再在中序中从根分为左右子树，递归实现
 * 
 * @export
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @returns {(TreeNode | null)}
 */
export function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  let bt: TreeNode | null = null;
  if (preorder.length === 0 || inorder.length === 0) {
    return bt;
  }
  bt = new TreeNode(preorder[0]);
  const idx = inorder.findIndex((item) => item === preorder[0]);
  bt.left = buildTree(
    preorder.slice(1, idx + 1),
    inorder.slice(0, idx),
  );
  bt.right = buildTree(
    preorder.slice(idx + 1),
    inorder.slice(idx + 1),
  );
  return bt;
};