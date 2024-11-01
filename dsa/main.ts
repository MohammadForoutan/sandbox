import { MyArray } from "./linear/array.ts";
import { LinkListSingly } from "./linear/link-list-singly.ts";
import { Stack } from "./linear/stack.ts";
import { BinaryTree } from "./non-linear/binary-tree.ts";
import { TreeNode } from "./non-linear/tree.ts";

const arr = new MyArray<number>();

arr.push(1);
arr.push(2);
arr.push(3);
arr.push(4);
arr.pop();
// arr.print();
//
// =============================

const singleLinkList = new LinkListSingly<number>();
singleLinkList.insertAtBeginning(1);
singleLinkList.insertAtBeginning(2);
singleLinkList.insertAtBeginning(3);
singleLinkList.deleteAtEnd();
singleLinkList.deleteAtEnd();
// singleLinkList.printList();
// ===============================

const myStack = new Stack<number>();
myStack.add(1);
myStack.add(2);
myStack.add(3);
// myStack.print();
myStack.pop();
myStack.pop();
// myStack.print();
// ================================

const tree = new TreeNode<number>(0);
const child1 = new TreeNode(10);
child1.addChild(new TreeNode(1));
child1.addChild(new TreeNode(5));
const child2 = new TreeNode(20);
tree.addChild(child1);
tree.addChild(child2);

child2.addChild(new TreeNode(30));
child2.addChild(new TreeNode(100));

// tree.print();
//========================================
const bst = new BinaryTree<number>();
bst.insert(3);
bst.insert(5);
bst.insert(4);
bst.insert(2);
bst.insert(7);
bst.insert(10);
bst.insert(16);
bst.insert(15);
bst.insert(11);

console.log(bst.search(5));
// console.log(bst);
// =======================================
