// Ternary Operator
var max = 100;
var counter = 100;
counter < max ? counter++ : counter = 1;
console.log(counter);
// Else If
var discount;
var itemCount = 10;
if (itemCount > 0 && itemCount <= 5) {
    discount = 5; // 5% discount
}
else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
}
else {
    discount = 15; // 15%
}
console.log("You got ".concat(discount, "% discount. "));
var discount1;
var itemCount1 = 11;
if (itemCount1 > 0 && itemCount1 <= 5) {
    discount1 = 5; // 5% discount1
}
else if (itemCount1 > 5 && itemCount1 <= 10) {
    discount1 = 10; // 10% discount1 
}
else if (discount1 > 10) {
    discount1 = 15; // 15%
}
else {
    throw new Error('The number of items cannot be negative!');
}
console.log("You got ".concat(discount1, "% discount1. "));
