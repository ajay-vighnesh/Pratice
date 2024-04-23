function numberConvert(columnTitle: string): number {
    if (columnTitle.length < 1 || columnTitle.length > 7) {
        throw new Error("columnTitle length should be between 1 and 7");
    }
    
    if (columnTitle.length ===7 && columnTitle <= "FXSHRXW") {
        throw new Error("columnTitle should be in the range [\"A\", \"FXSHRXW\"]");
    }

    if (!/^[A-Z]+$/.test(columnTitle)) { // regular expression
        throw new Error("columnTitle should consist only of uppercase English letters");
    }
    

    let result = 0;
    let base = 'A'.charCodeAt(0); // ASCII value of 'A' minus 1 // 65
    

    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - base + 1; // 65-65 + 1 (ACTUAL DISTANCE)
        result = result * 26 + charValue; // PERMUTATION 
        
    }

    return result;
}

// Example usage:
console.log(numberConvert("OPQRST"));       // Output: 1
console.log(numberConvert("ABCV"));       // Output: 1
console.log(numberConvert("A"));       // Output: 1
console.log(numberConvert("FXSHRXW"));       // Output: 1
console.log(numberConvert("ABsdV"));       // Output: 1






