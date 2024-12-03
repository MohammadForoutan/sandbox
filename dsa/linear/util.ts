export function swap(i1: number, i2: number, arr: any[]) {
  const tmp = arr[i1];
  arr[i1] = arr[i2];
  arr[i2] = tmp;
}
