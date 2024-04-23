// Using as //
var someValue = "this is a string";
var strLength = someValue.length;
console.log(strLength);
console.log(typeof strLength);
// Using <> //
var someValue1 = "ajay";
var strLength1 = someValue1.length;
console.log(strLength1);
console.log(typeof strLength1);
// //
// Define a variable with a union type
var value = "123";
// Attempt to get the length property (which only exists on strings)
// Without type casting, TypeScript would generate an error
var length1 = value.length;
console.log(length1); // Output: 3
