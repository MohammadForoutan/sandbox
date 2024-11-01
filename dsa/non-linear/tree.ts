export class TreeNode<T> {
  data: T;
  children: TreeNode<T>[] = [];

  constructor(data: T) {
    this.data = data;
  }

  addChild(child: TreeNode<T>) {
    this.children.push(child);
  }

  print(): void {
    console.log({ data: this.data, children: this.children });
  }
}
