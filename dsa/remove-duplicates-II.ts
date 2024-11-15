function removeDuplicates(nums: number[]): number {
  const len = nums.length;

  for (let i = 0; i < len; i++) {
    if (
      nums[i] === nums[i + 1] &&
      nums[i] === nums[i + 2] &&
      nums[i + 2] !== undefined
    ) {
      while (nums[i + 2] === nums[i]) {
        nums.splice(i + 2, 1);
      }
    }
  }

  return nums.length;
}

const arr = [0, 0, 1, 1, 1, 1, 2, 3, 3, 3, 3];
console.log({ input: arr });
const result = removeDuplicates(arr);
console.log({ result });
