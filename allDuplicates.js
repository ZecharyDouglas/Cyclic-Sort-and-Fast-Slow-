var findDuplicates = function (nums) {
  const duplicates = [];

  for (const currentNum of nums) {
    const otherIndex = Math.abs(currentNum) - 1;

    if (nums[otherIndex] > 0) {
      nums[otherIndex] = nums[otherIndex] * -1;
    } else {
      duplicates.push(Math.abs(currentNum));
    }
  }
  return duplicates;
};
