// Concatenation of Array //
function getConcatenation(nums) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        nums.push(nums[i]);
    }
    return nums;
}
;
console.log(getConcatenation([1, 2, 1]));
// shuffle array 
function shuffle(nums, n) {
    var result = [];
    for (var i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }
    return result;
}
;
console.log(shuffle([2, 3, 4, 5, 1, 7], 3));
