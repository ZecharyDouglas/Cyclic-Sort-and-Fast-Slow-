var maxArea = function (height) {
  let maxarea = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    // computing the area between the two lines
    let area = Math.min(height[left], height[right]) * (right - left);

    // changing the max area if the new area is bigger
    maxarea = Math.max(maxarea, area);

    // the pointer that has the shorter side moves inward
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxarea;
};
module.exports = maxArea;
