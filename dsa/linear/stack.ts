export class Stack<T> {
  items: T[] = [];
  top: T | null = null;

  add(data: T): void {
    this.items.push(data);
    this.top = data;
  }

  pop(): T | null {
    if (this.items.length < 1) return null;
    return this.items.pop();
  }

  print(): void {
    console.log(this.items);
  }
}
