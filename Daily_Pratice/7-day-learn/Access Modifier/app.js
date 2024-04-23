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
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
var person = new Person('153-07-3130', 'John', 'Doe');
console.log('1st', person.getFullName()); // compile error
// private example //
var Person1 = /** @class */ (function () {
    function Person1(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person1.prototype.getSSN = function () {
        return this.ssn;
    };
    Person1.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person1.prototype.getLastName = function () {
        return this.lastName;
    };
    Person1.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person1;
}());
var person1 = new Person1('153-07-3130', 'John', 'Doe');
console.log(person1.getFirstName()); // John
console.log(person1.getLastName()); // Doe
console.log(person1.getFullName()); // John Doe
console.log(person1.getSSN()); // 153-07-3130
// Protected Example //
var Person3 = /** @class */ (function () {
    function Person3(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person3.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person3;
}());
// Subclass of Person //
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(ssn, firstName, lastName, employeeId) {
        // call the constructor of the Person class:
        var _this = _super.call(this, ssn, firstName, lastName) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeId = function () {
        return this.employeeId;
    };
    Employee.prototype.getSSN = function () {
        // Accessing the protected property from the subclass
        return this.ssn;
    };
    return Employee;
}(Person3));
var employee = new Employee('153-07-3130', 'John', 'Doe', 1001);
console.log(employee.getFullName()); // John Doe
console.log(employee.getEmployeeId()); // 1001
console.log(employee.getSSN()); // 153-07-3130
