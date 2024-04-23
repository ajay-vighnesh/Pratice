// Function Type Start //
function multiply(a, b) {
    return a * b;
}
var c = multiply(4, 5);
console.log(c);
// Function Type End //
// Return a + b Start //
function add(a, b) {
    return a + b;
}
var d = add(5, 5);
console.log('d:->', d);
// Return a + b End //
// Return String Start //
function sub() {
    return "akjsncajncs";
}
var d1 = sub();
console.log('d1:->', d1);
// Return String End //
// Void Type Start //
function printHello() {
    // return ("jhbchabc")
    // console.log('Hello!');
}
printHello();
// Void Type End //
// 04-04-2024 //
// Normal Function Declaration //
function addnumbs(a, b) {
    return a + b;
}
console.log('addnumbs:->', addnumbs(5, 5));
// Variable Function Declaration //
var sample = "Add the 2 values using function" + ' :-->' + addnumbs(5, 5);
console.log('sample', sample);
// Function() Constructor //
var myFunction;
myFunction = function (a, b) {
    return a * b;
};
var z = myFunction(4, 5);
console.log('z_as_function:->', z);
// Arrow Functions //
var y1 = function (x, y) { return x * y; };
console.log('y1_Arrow_function:-->', y1(5, 5));
