class TwoPointerArray<T> {
  private data: (T | undefined)[];
  private start: number;
  private end: number;

  constructor(initialCapacity: number = 10) {
    this.data = new Array(initialCapacity).fill(undefined);
    this.start = Math.floor(initialCapacity / 2);
    this.end = this.start;
  }

  private resizeIfNeeded() {
    if (this.start === 0 || this.end === this.data.length) {
      const newCapacity = this.data.length * 2;
      const newData = new Array(newCapacity).fill(undefined);
      const offset = Math.floor((newCapacity - (this.end - this.start)) / 2);

      for (let i = this.start; i < this.end; i++) {
        newData[offset + (i - this.start)] = this.data[i];
      }

      this.end = offset + (this.end - this.start);
      this.start = offset;
      this.data = newData;
    }
  }

  unshift(element: T): void {
    this.resizeIfNeeded();
    this.start--;
    this.data[this.start] = element;
  }

  shift(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    const element = this.data[this.start];
    this.data[this.start] = undefined;
    this.start++;
    return element;
  }

  push(element: T): void {
    this.resizeIfNeeded();
    this.data[this.end] = element;
    this.end++;
  }

  pop(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    this.end--;
    const element = this.data[this.end];
    this.data[this.end] = undefined;
    return element;
  }

  isEmpty(): boolean {
    return this.start === this.end;
  }

  size(): number {
    return this.end - this.start;
  }

  toArray(): T[] {
    return this.data.slice(this.start, this.end) as T[];
  }
}

// Performance Comparison
const builtInArrayTest = () => {
  console.time("Built-in Array");
  const builtInArray: number[] = [];
  for (let i = 0; i < 100_000; i++) {
    builtInArray.unshift(i);
  }
  builtInArray.unshift(1300);
  console.timeEnd("Built-in Array");
  console.log(builtInArray[0]);
};

const twoPointerArrayTest = () => {
  console.time("TwoPointerArray");
  const twoPointerArray = new TwoPointerArray<number>();
  for (let i = 0; i < 100_000; i++) {
    twoPointerArray.unshift(i);
  }
  twoPointerArray.unshift(1300);
  console.timeEnd("TwoPointerArray");
  console.log(twoPointerArray.toArray()[0]);
};

builtInArrayTest();
twoPointerArrayTest();
