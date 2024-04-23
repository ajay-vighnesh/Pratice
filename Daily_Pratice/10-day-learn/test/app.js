function convertNumber(columnTitle) {
    var result = 0;
    var base = 'A'.charCodeAt(0); // ASCII value of 'A' minus 1 
    for (var i = 0; i < columnTitle.length; i++) {
        var charValue = columnTitle.charCodeAt(i) - base + 1;
        result = result * 26 + charValue;
    }
    return result;
}
// Example usage:
console.log(convertNumber("A")); // Output: 1
console.log(convertNumber("B")); // Output: 2
console.log(convertNumber("Z")); // Output: 26
console.log(convertNumber("AA")); // Output: 27
console.log(convertNumber("AB")); // Output: 28
console.log(convertNumber("FXSHRXW")); // Output: 2147483647
