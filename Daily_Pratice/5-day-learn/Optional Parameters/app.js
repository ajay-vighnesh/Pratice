var add = function (a, b, c) {
    return a + b + (c || 0);
};
var d = add(5, 5, 5);
console.log(d);
function multiply(a, b, c) {
    console.log(typeof c);
    if (c) {
        return a * b * c;
    }
    return a * b;
}
var e = multiply(1, 2);
console.log(e);
