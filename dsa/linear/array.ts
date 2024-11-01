export class MyArray<T> {
  private items: (T | undefined)[] = [];
  private len: number = 0;

  public push(item: T) {
    this.items[this.length] = item;
    this.len++;
  }

  pop(): number {
    this.items[this.length - 1] = undefined;
    this.len--;
    return this.length;
  }

  get first(): T | undefined {
    return this.items[0];
  }

  get last(): T | undefined {
    return this.items[this.len];
  }

  get length() {
    return this.len;
  }

  print(): void {
    console.log(this.items);
  }
}
