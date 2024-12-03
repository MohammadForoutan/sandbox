class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const inorder: number[] = [];
function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) return inorder;
  inorderTraversal(root.left);
  inorder.push(root.val);
  inorderTraversal(root.right);

  return inorder;
}
