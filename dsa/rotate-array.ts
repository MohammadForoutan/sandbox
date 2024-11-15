
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  let rounds = nums.length > k ? k : nums.length % k;
  for (; rounds > 0; rounds--) {
    nums.unshift(nums.slice(-1)[0]);
    nums.pop()
    nums.splice()
  }
}


