var findDuplicate = function (nums) {
  let currentIndex = 0;
  while (currentIndex < nums.length) {
    const correctIndex = nums[currentIndex] - 1;
    if (currentIndex !== correctIndex) {
      [nums[currentIndex], nums[correctIndex]] = [
        nums[correctIndex],
        nums[currentIndex],
      ];
    }
    currentIndex++;
  }
  return nums[nums.length - 1];
};
