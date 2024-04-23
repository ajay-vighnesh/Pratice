var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function values() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var sample = 0;
    for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        sample = sample + arg;
    }
    return sample;
}
var x = values(5, 4, 6, 7, 8);
console.log('1_st_x:-->', x);
// Rest parameter with spread operator //
function add(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var sum = a;
    console.log('sum:->', sum);
    for (var _a = 0, b_1 = b; _a < b_1.length; _a++) {
        var num = b_1[_a];
        sum = sum + num;
    }
    return sum;
}
console.log('add:->', add.apply(void 0, __spreadArray([5], [2, 3, 5], false)));
console.log.apply(console, __spreadArray(['a:->'], [1, 2, 3], false));
console.log('a1:->', [1, 2, 3]);
function calculateAverage() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var number = numbers_1[_a];
        sum = sum + number;
    }
    return sum = sum / numbers.length;
}
console.log('1_st_calculateAverage', calculateAverage(5, 10, 15));
console.log('2_nd_calculateAverage', calculateAverage(2, 4, 6, 8, 10));
// String Interpolation //
function placeOrder(customerName) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    console.log(items);
    console.log("Order received from ".concat(customerName, ":"));
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("-> ".concat(item));
    }
}
// Example usage:
placeOrder("ajay", "Burger", "Fries", "Soda");
