function add(a, b) {
    return a + b;
}
console.log(add('hai', 'hello'));
console.log(add(10, 20));
function sum(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
console.log(sum('hai', 'hello', 'aaa'));
console.log(sum(5, 5));
// Implementation
function calculateArea(shape) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (shape === "circle") {
        var radius = args[0];
        return Math.PI * radius * radius;
    }
    else if (shape === "rectangle") {
        var width = args[0], height = args[1];
        return width * height;
    }
    else if (shape === "square") {
        var side = args[0];
        return side * side;
    }
    else {
        throw new Error("Unsupported shape");
    }
}
// Usage
console.log(calculateArea("circle", 5)); // Calculate area of circle with radius 5
console.log(calculateArea("rectangle", 4, 6)); // Calculate area of rectangle with width 4 and height 6
console.log(calculateArea("square", 3)); // Calculate area of square with side length 3
