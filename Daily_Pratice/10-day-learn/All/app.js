// HELLO WORLD //
var message = "hello world!";
console.log('message:--->', message);
// HELLO WORLD //
// WHY TS //
var box;
console.log(typeof (box)); // undefined
box = "Hello";
console.log(typeof (box)); // string
box = 100;
console.log(typeof (box)); // number
// WHY TS //
// TS TYPES //
var a = "ajay";
console.log('Length of a :-->', a.length);
console.log('Upper Case of a :-->', a.toUpperCase());
var b = "ajsnaj";
console.log('b', typeof b);
var v = "asjxs";
console.log('any-types:--->', Math.round(v));
var c = ["a", "b", "c"];
console.log('c', c);
var d = ["ajay", 1, "vighnesh"];
console.log('Tuple:--->', d);
var e = null;
console.log('e:--->', typeof e);
// TS TYPES //
// TS ANNOTATIONS //
var firstName = "ajay";
var last_Name = "vighnesh";
var $sam = ["ajsnxhsa", "dkcbjhbcddc", "jhcbajhvda"];
var obj;
obj = {
    name: "ajay",
    count: 56
};
console.log('firstName:--->', firstName);
console.log('last_Name:--->', last_Name);
console.log('$sam:--->', $sam);
console.log('total-obj:--->', obj);
console.log('1-obj:--->', obj.name);
console.log('2-obj:--->', obj.count);
// TS ANNOTATIONS //
// TS NUMBER //
var f = 123e5;
console.log('f:---->', f);
var g = 9.52;
var g1 = g.toString();
var g2 = g.toExponential(3);
var g3 = g.toFixed(3);
var g4 = g.toPrecision(2);
console.log('g:-->', g);
console.log('g1:-->', typeof g1);
console.log('g2', g2);
console.log('g3', g3);
console.log('g4', g4);
// TS NUMBER //
// TS STRING //
var sample = "ajay";
console.log('sample:-->', sample);
var sample1 = "ajsj\ndascajcdc\n\"dkdd\"";
console.log('sample1:-->', sample1);
console.log('length-of-sample1:-->', sample1.length);
var sample2 = new String("sylesh");
console.log('sample2:--->', typeof sample2);
var sample3 = " ajay ";
console.log('sample3:-->', sample3.charAt(1));
console.log('sample3:-->', sample3.charCodeAt(2));
console.log('sample3:-->', sample3.slice(-3, -1));
var sample4 = " ajajsj ";
var s1 = sample4.length;
console.log('s1', s1);
var s2 = sample4.trim();
console.log('s2', s2);
console.log('s2-length-after-trim:-->', s2.length);
// TS STRING //
// OBJECT TYPE //
var ss1;
ss1 = {
    name: "ajay",
    empl_no: 5,
    job_title: "developer"
};
console.log('ss1:--->', ss1.name);
// OBJECT TYPE //
// ARRAY TYPE //
var ss2;
ss2 = ["ajay", "vighnesh"];
ss2.push("ajcsnac", 3, 2);
console.log('ss2:--->', ss2);
console.log('ss2_length:--->', ss2.length);
console.log('ss2_sort:--->', ss2.sort());
console.log('ss2_reverse:--->', ss2.reverse());
var ss3 = ss2.toString();
console.log('ss3:---->', ss3);
var ss4 = ["avv", "dvdsvds", 5, 6];
console.log('type-of-ss4:--->', typeof ss4);
var ans = ss4.join("*");
console.log('ans:--->', ans);
console.log('ans-type:--->', typeof ans);
var arr_name = [[1, 2, 3], [1, 2, 3]];
console.log('arr_name', arr_name);
// ARRAY TYPE //
// FUNCTION //
function add(a, b) {
    return a + b;
}
console.log('addition:-->', add(4, 5));
// FUNCTION //
// 11-04-2024 //
// Function //
// Function that adds two numbers and returns the result
function addNumbers(a, b) {
    return a + b;
}
// Example usage
var result = addNumbers(5, 3);
console.log(result); // Output: 8
// Function //
// Optional Parameters //
// Function that greets a person, with an optional parameter for specifying a greeting
function greetPerson(name, greeting) {
    if (greeting) {
        return "".concat(greeting, ", ").concat(name, "!");
    }
    else {
        return "Hello, ".concat(name, "!");
    }
}
// Example usage
console.log(greetPerson("Alice")); // Output: Hello, Alice!
console.log(greetPerson("Bob", "Good morning")); // Output: Good morning, Bob!
// Optional Parameters //
// Default Parameters //
function applyDiscount(price, discount) {
    if (discount === void 0) { discount = 0.05; }
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95
// Default Parameters //
// Rest Parameters //
// Function that calculates the sum of multiple numbers using rest parameters
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    for (var _a = 0, numbers_1 = numbers; _a < numbers_1.length; _a++) {
        var num = numbers_1[_a];
        total += num;
    }
    return total;
}
// Example usage
console.log(sum(1, 2, 3)); // Output: 6 (sum of 1, 2, and 3)
console.log(sum(5, 10, 15, 20)); // Output: 50 (sum of 5, 10, 15, and 20)
// Implementation of the overloaded function
function greet(name, message) {
    if (message) {
        console.log("".concat(message, ", ").concat(name, "!"));
    }
    else {
        console.log("Hello, ".concat(name, "!"));
    }
}
// Example usage
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Good morning"); // Output: Good morning, Bob!
// Function overloading //
// Classes //
// Define a class representing a Car
var Car = /** @class */ (function () {
    // Constructor
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    // Method to display car information
    Car.prototype.displayInfo = function () {
        console.log("This car is a ".concat(this.year, " ").concat(this.brand, " ").concat(this.model, "."));
    };
    return Car;
}());
// Create an instance of the Car class
var myCar = new Car("Toyota", "Camry", 2020);
// Call the displayInfo method
myCar.displayInfo(); // Output: This car is a 2020 Toyota Camry.
// Classes // 
// 11-04-2024 //
// IF case //
// Define a function to check if a number is even or odd
function checkEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log("".concat(num, " is even."));
    }
    else {
        console.log("".concat(num, " is odd."));
    }
}
// Example usage
checkEvenOrOdd(4); // Output: 4 is even.
checkEvenOrOdd(7); // Output: 7 is odd.
// IF case //
// For loop //
// Define a function to print numbers from 1 to a specified limit using a for loop
function printNumbers(limit) {
    for (var i = 1; i <= limit; i++) {
        console.log(i);
    }
}
// Example usage
printNumbers(5);
// For loop //
// While loop  //
// Define a function to print numbers from 1 to a specified limit using a while loop
function printNumbers1(limit) {
    var i = 1;
    while (i <= limit) {
        console.log(i);
        i++;
    }
}
// Example usage
printNumbers1(5);
// While Loop //
// SWITCH CASE  //
// Define a function that takes a day number and returns the name of the day
function getDayName(dayNumber) {
    var dayName;
    switch (dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }
    return dayName;
}
// Example usage
console.log(getDayName(1)); // Output: Monday
console.log(getDayName(8)); // Output: Invalid day number
// SWITCH CASE  //
var arr = ["acas", "ascacs"];
arr[4] = "orange";
console.log('arrleng:-->', arr.length);
console.log('arrstr:-->', arr.toString());
// Atributes & Properties //
var image = document.querySelector('img');
console.log(image.src); // Accessing the src property
image.src = 'newimage.jpg'; // Modifying the src property
var link = document.querySelector('a');
console.log(link.href); // Accessing the href property
link.href = 'https://newexample.com'; // Modifying the href property
