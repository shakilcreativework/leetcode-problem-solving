/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const count = {};

    for(let char of magazine){
        console.log(char);
        count[char] = (count[char] || 0) + 1;
    }

    for(let char of ransomNote){
        if(!count[char] || count[char] === 0){
            return false;
        }
        count[char]--;
    }

    return count;
};

// const results = canConstruct("a", "b");
// const results = canConstruct("aa", "ab");
// const results = canConstruct("aa", "aab");
const results = canConstruct("aac", "abddcfabdfdcddab");
console.log(results);