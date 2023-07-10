var findDuplicates = function (nums) {
  let i = 0;
  while (i < nums.length) {
    let correct = nums[i] - 1;
    if (nums[i] !== nums[correct]) {
      [nums[i], nums[correct]] = [nums[correct], nums[i]]; // Swap
    } else {
      i++;
    }
  }

  let duplicate_nums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] - 1 != i) {
      duplicate_nums.push(nums[i]);
    }
  }

  return duplicate_nums;
};

module.exports = findDuplicates;
