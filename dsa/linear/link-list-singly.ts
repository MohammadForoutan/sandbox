export class NodeSingly<T> {
  data: T;
  next: NodeSingly<T> | null;
  constructor(input: T) {
    this.data = input;
    this.next = null;
  }
}

export class LinkListSingly<T> {
  head: NodeSingly<T> | null = null;

  insertAtBeginning(data: T) {
    const node = new NodeSingly(data);

    node.next = this.head;
    this.head = node;
  }

  insertAtEnd(data: T) {
    const node = new NodeSingly(data);

    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }

      current.next = node;
    }
  }

  deleteAtBeginning() {
    if (this.head === null) {
      // do nothing
    } else {
      this.head = this.head.next;
    }
  }
  deleteAtEnd() {
    let current = this.head;
    while (current?.next?.next !== null) {
      current = current?.next as NodeSingly<T>;
    }

    current.next = null;
  }

  printList(): void {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
