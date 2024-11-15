import { BinaryTree, BinaryTreeNode as BinaryNode } from "./binary-tree.ts";

function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
  if (!curr) {
    return path;
  }

  // recurse
  // pre
  walk(curr.left, path);

  // recurse
  // in

  // recurse
  // post
  walk(curr.right, path);

  // post traverse
  path.push(curr.data);

  return path;
}

function preOrderTraverse(head: BinaryNode<number>): number[] {
  return walk(head, []);
}

const tree = new BinaryTree();
tree.insert(4);
tree.insert(5);
tree.insert(29);
tree.insert(3);
tree.insert(9);
tree.insert(1);
tree.insert(2);
tree.insert(30);

console.log({ tree: JSON.stringify({ tree }) });

const result = preOrderTraverse(tree.root as BinaryNode<number>);
console.log({ result: JSON.stringify({ result }) });
