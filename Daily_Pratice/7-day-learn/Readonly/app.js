var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old."));
    };
    // Method to change the name
    Person.prototype.changeName = function (newName) {
        // Check if the new name is different from the current name
        if (newName !== this.name) {
            console.log("Changing name from ".concat(this.name, " to ").concat(newName, "."));
            this.name = newName; // Update the name
        }
        else {
            console.log("Name is already ".concat(newName, ". No change required."));
        }
    };
    // Method to increment the age
    Person.prototype.incrementAge = function () {
        console.log("Incrementing age for ".concat(this.name, " from ").concat(this.age, " to ").concat(this.age + 1, "."));
        // Update the age
        // Since age is readonly, we cannot directly increment it, but we can create a new Person object with updated age
        var newPerson = new Person(this.name, this.age + 1);
        return newPerson;
    };
    return Person;
}());
var person = new Person("Bob", 30);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person.changeName("Bob"); // Output: Changing name from Alice to Bob.
person.greet(); // Output: Hello, my name is Bob and I am 30 years old.
var newPerson = person.incrementAge();
newPerson.greet(); // Output: Hello, my name is Bob and I am 31 years old.
