/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    const check = str === str.split('').reverse().join('');
    return check;
};

const results = isPalindrome(121);
console.log(results);