function singleNumber(nums: number[]): number {
  const set = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      set.delete(nums[i]);
    } else {
      set.add(nums[i]);
    }
  }

  return set.values().next().value;
}

console.log(singleNumber([4, 1, 2, 1, 2]));
