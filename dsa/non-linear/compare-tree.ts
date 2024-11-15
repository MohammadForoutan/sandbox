import { BinaryTree, BinaryTreeNode as BinaryNode } from './binary-tree.ts';




function compare(a: BinaryNode<number> | null, b: BinaryNode<number> | null)
: boolean {
  if(a === null && b === null) return true;
  if(a === null || b === null) return false;
  if(a.data != b.data) return false;

  return compare(a.left, b.left) && compare(a.right, b.right);
}

const tree1 = new BinaryTree();
tree1.insert(4);
tree1.insert(5);
tree1.insert(29);
tree1.insert(3);
tree1.insert(9);
tree1.insert(1);
tree1.insert(2);
tree1.insert(30);


const tree2 = new BinaryTree();
tree2.insert(4);
tree2.insert(5);
tree2.insert(29);
tree2.insert(3);
// tree2.insert(9);
tree2.insert(7);
tree2.insert(1);
tree2.insert(2);
tree2.insert(30);

const result = compare(tree1.root, tree2.root)
console.log({ result })
