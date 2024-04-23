var Person = /** @class */ (function () {
    function Person(ssn, firstName, lastName, salary) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Object.defineProperty(Person.prototype, "getSalary", {
        get: function () {
            return this.salary;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "setSalary", {
        set: function (salary) {
            this.salary = salary;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var person = new Person("5435435", "Sylesh", "kumar", 15000);
console.log(person.getFullName());
console.log(person.ssn);
console.log(person.salary);
console.log(person.getSalary);
