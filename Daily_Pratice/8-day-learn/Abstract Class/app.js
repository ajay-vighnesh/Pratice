var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return "{this.firstName} ".concat(this.lastName);
        },
        enumerable: false,
        configurable: true
    });
    Employee.prototype.compensationStatement = function () {
        return "".concat(this.fullName, " makes ").concat(this.getSalary(), " a month.");
    };
    return Employee;
}());
// ABSTRACT CLASS does not call through Object 
// let employee = new Employee('John','Doe'); 
var ExtraEmployee = /** @class */ (function (_super) {
    __extends(ExtraEmployee, _super);
    function ExtraEmployee(firstName, lastName, salary, rate, hours) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.salary = salary;
        _this.rate = rate;
        _this.hours = hours;
        return _this;
    }
    ExtraEmployee.prototype.getSalary = function () {
        return this.rate * this.hours;
    };
    return ExtraEmployee;
}(Employee));
var john = new ExtraEmployee('John', 'Doe', 12000, 100, 160);
console.log(john.compensationStatement());
// Real Life Example //
var Shape = /** @class */ (function () {
    function Shape(color, position) {
        this.color = color;
        this.position = position;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(color, position, radius) {
        var _this = _super.call(this, color, position) || this;
        _this.color = color;
        _this.position = position;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.calculateArea = function () {
        return 3.14 * this.radius * this.radius;
    };
    Circle.prototype.draw = function () {
        console.log("Drawing a ".concat(this.color, " circle at (").concat(this.position.x, ", ").concat(this.position.y, ") with radius ").concat(this.radius));
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(color, position, width, height) {
        var _this = _super.call(this, color, position) || this;
        _this.color = color;
        _this.position = position;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.draw = function () {
        console.log("Drawing a ".concat(this.color, " rectangle at (").concat(this.position.x, ", ").concat(this.position.y, ") with width ").concat(this.width, " and height ").concat(this.height));
    };
    return Rectangle;
}(Shape));
// Usage
var circle = new Circle("red", { x: 10, y: 20 }, 5);
var rectangle = new Rectangle("blue", { x: 30, y: 40 }, 10, 15);
console.log("Circle area:", circle.calculateArea());
circle.draw();
console.log("Rectangle area:", rectangle.calculateArea());
rectangle.draw();
