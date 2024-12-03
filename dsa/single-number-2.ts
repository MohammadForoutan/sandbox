function singleNumber(nums: number[]): number {
  return nums.reduce((p, v) => p ^ v, 0);
}

console.log(singleNumber([4, 1, 2, 1, 2]));
