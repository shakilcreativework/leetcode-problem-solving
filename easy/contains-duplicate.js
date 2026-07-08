/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const check = new Set();

    for(let num of nums){
        if(check.has(num)){
            return true
        }
        check.add(num);
    }

    return false;
};

// const results = containsDuplicate([1,2,3,1]);
// const results = containsDuplicate([1,2,3,4]);
const results = containsDuplicate([1,1,1,3,3,4,3,2,4,2]);
console.log(results);