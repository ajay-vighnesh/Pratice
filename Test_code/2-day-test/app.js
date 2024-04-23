//////////
var sample = [5, 3, 6, 2];
function findMaxProduct(sample) {
    var max = 1;
    for (var i = 0; i < sample.length - 1; i++) {
        var s = sample[i] * sample[i + 1];
        if (s > max) {
            max = s;
        }
    }
    return max;
}
console.log(findMaxProduct(sample));
// new 1 //
function ascend(samp1) {
    // This line defines a function named ascend which takes an samp1ay of numbers (samp1) as input and returns a number (specifically, the length of the longest strictly ascending sequence).
    if (samp1.length === 0)
        return 0;
    var maxLength = 1;
    var currentLength = 1;
    var longestSeqStartIndex = 0;
    var currentSeqStartIndex = 0;
    for (var i = 1; i < samp1.length; i++) {
        if (samp1[i] > samp1[i - 1]) {
            currentLength++;
        }
        else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                longestSeqStartIndex = currentSeqStartIndex;
            }
            currentLength = 1;
            currentSeqStartIndex = i;
        }
    }
    // Check if the last sequence is the longest
    if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSeqStartIndex = currentSeqStartIndex;
    }
    console.log("The max value is: ".concat(maxLength));
    console.log("".concat(maxLength, " numbers in ascending order"));
    for (var i = longestSeqStartIndex; i < longestSeqStartIndex + maxLength; i++) {
        console.log(samp1[i]);
    }
    return maxLength;
}
// Example usage:
var numElements = 5;
var numbers = [45, 40, 20, 30, 35, 0, 10]; // You can replace this with user input
// console.log(`Enter the number of elements: ${numElements}`);
// console.log("Enter 5 numbers in any order to find the longest ascending sequence");
console.log(ascend(numbers));
// new 1 //
