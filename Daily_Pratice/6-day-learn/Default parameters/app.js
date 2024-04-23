function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log(add(5));
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
// Multiply the number //
function multiplynum(a, b) {
    if (b === void 0) { b = 6; }
    return a * b;
}
console.log('change:-->', multiplynum(2, 5));
function displayName(name, statement) {
    if (statement === void 0) { statement = "Hello"; }
    return statement + ' ' + name;
}
console.log(displayName('Arun'));
console.log(displayName('ajay', 'Hi'));
