var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.ssn, " ").concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.getFullName());
// Real Case Class Example //
// Define a class representing a rectangle
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // Method to calculate the area of the rectangle
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
}());
// Create an instance of the Rectangle class
var myRectangle = new Rectangle(5, 10);
// Calculate and print the area of the rectangle
console.log("Area of the rectangle:", myRectangle.calculateArea());
// Object Real Case Example //
// Define a class representing a rectangle
var ObjectRectangle = /** @class */ (function () {
    function ObjectRectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    // Method to calculate the area of the rectangle
    ObjectRectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    return ObjectRectangle;
}());
// Create objects representing different rectangles
var rectangle1 = new ObjectRectangle(5, 10);
var rectangle2 = new ObjectRectangle(3, 7);
var rectangle3 = new ObjectRectangle(8, 4);
// Calculate and print the area of each rectangle
console.log("Area of rectangle 1:", rectangle1.calculateArea());
console.log("Area of rectangle 2:", rectangle2.calculateArea());
console.log("Area of rectangle 3:", rectangle3.calculateArea());
// Employee details //
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    Employee.prototype.getSalary = function () {
        return 10000;
    };
    return Employee;
}());
// Classes Example //
var Sample = /** @class */ (function () {
    function Sample(name, message) {
        this.name = name;
        this.message = message;
    }
    Sample.prototype.greet = function () {
        return "hello, my name is ".concat(this.name, " and my message is ").concat(this.message);
    };
    return Sample;
}());
var sample1 = new Sample("ajay", "hiii");
console.log('sample1:--->', sample1.greet());
// We define a class Person with properties name and age, and a method greet().
// The constructor is a special method used for initializing object instances.It takes parameters name and age and assigns them to the corresponding properties of the object.
// The greet() method returns a greeting message containing the person's name and age.
// We create an instance of the Person class named person1 with the name "Alice" and age 30.
// Finally, we call the greet() method on the person1 object to print the greeting message.
// The purpose of classes in TypeScript is to provide a way to model real - world entities or abstract concepts by bundling together related data and functionality.They promote code reusability, maintainability, and organization by allowing you to create multiple objects with similar characteristics and behaviors.Classes also support inheritance, encapsulation, and polymorphism, which are important principles in object - oriented programming.
