function majorityElement(nums: number[]): number {
  console.log(nums);
  const max = { m: 0, v: 0 };

  for (let i = 0; i < nums.length; i++) {
    const number = nums[i];

    max[number] = !!max[number] ? ++max[number] : 1;
    if (max[number] > max.m) {
      max.m = max[number];
      max.v = number;
    }
  }

  return max.v;
}
