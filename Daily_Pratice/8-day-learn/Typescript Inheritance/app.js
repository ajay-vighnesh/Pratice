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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(firstName, lastName, jobTitle) {
        // call the constructor of the Person class:
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return Employee;
}(Person));
var employee = new Employee('John', 'Doe', 'Web Developer');
console.log(employee.getFullName());
console.log(employee.describe());
// Method Overriding //
var Person1 = /** @class */ (function () {
    function Person1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person1.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person1;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(firstName, lastName, jobTitle) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    Employee1.prototype.describe = function () {
        return _super.prototype.describe.call(this) + "I'm a ".concat(this.jobTitle, ".");
    };
    return Employee1;
}(Person1));
var person2 = new Person1('ajay', 'vighnesh');
var employee2 = new Employee1('ajay', 'vighnesh', 'dev');
console.log('person2:-->', person2.describe());
console.log('employee2:--->', employee2.describe());
