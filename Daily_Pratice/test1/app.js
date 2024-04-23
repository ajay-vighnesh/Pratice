function numberConvert(columnTitle) {
    if (columnTitle.length < 1 || columnTitle.length > 7) {
        throw new Error("columnTitle length should be between 1 and 7");
    }
    if (columnTitle.length === 7 && columnTitle <= "FXSHRXW") {
        throw new Error("columnTitle should be in the range [\"A\", \"FXSHRXW\"]");
    }
    // if (!/^[A-Z]+$/.test(columnTitle)) {
    //     throw new Error("columnTitle should consist only of uppercase English letters");
    // }
    // if (!toUpperCase()(columnTitle)) {
    //     throw new Error("columnTitle should consist only of uppercase English letters");
    // }
    var a = "ajs";
    var b = a.toUpperCase();
    console.log(b);
    var result = 0;
    var base = 'A'.charCodeAt(0); // ASCII value of 'A' minus 1 // 65
    for (var i = 0; i < columnTitle.length; i++) {
        var charValue = columnTitle.charCodeAt(i) - base + 1; // 65-65 + 1 (ACTUAL DISTANCE)
        result = result * 26 + charValue; // PERMUTATION 
    }
    return result;
}
// Example usage:
console.log(numberConvert("OPQRST")); // Output: 1
console.log(numberConvert("ABCV")); // Output: 1
console.log(numberConvert("A")); // Output: 1
console.log(numberConvert("FXSHRXW")); // Output: 1
console.log(numberConvert("ABsdV")); // Output: 1
