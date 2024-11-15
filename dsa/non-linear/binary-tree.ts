export class BinaryTreeNode<T> {
  data: T;
  left: BinaryTreeNode<T> | null = null;
  right: BinaryTreeNode<T> | null = null;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinaryTree<T> {
  root: BinaryTreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  /*
   * insert binary node to binary tree
   */
  insert(data: T): void {
    const newNode = new BinaryTreeNode(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  private insertNode(node: BinaryTreeNode<T>, newNode: BinaryTreeNode<T>) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(value: T): { node?: BinaryTreeNode<T>; exist: boolean } {
    return this.searchNode(this.root, value);
  }

  private searchNode(
    node: BinaryTreeNode<T> | null,
    value: T,
  ): { node?: BinaryTreeNode<T>; exist: boolean } {
    // Base case: node is null or key is present at node
    if (!node) return { node: undefined, exist: false };
    if (node.data === value) return { node, exist: true };

    // Key is greater than node's key
    if (value > node.data) {
      return this.searchNode(node.right, value);
    } else {
      // Key is smaller than node's key
      return this.searchNode(node.left, value);
    }
  }
}
