/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let t = 0 + 1; t < nums.length; t++) {
      if (i === t) {
        continue;
      } else {
        if (nums[t] + nums[i] === target) {
          return [i, t];
        }
      }
    }
  }
};

const results = twoSum([2, 7, 11, 15], 9);
console.log(results);
