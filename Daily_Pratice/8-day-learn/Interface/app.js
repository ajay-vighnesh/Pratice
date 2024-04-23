function getSample(person) {
    return "".concat(person.firstName, " ").concat(person.lastName);
}
var names = {
    firstName: 'abc',
    lastName: 'def',
    age: 22
};
var fullName = getSample(names);
console.log('fullName:--->', fullName);
// Function to display information about a person
function displayPersonInfo(person) {
    console.log("Name: ".concat(person.firstName, " ").concat(person.lastName));
    console.log("Age: ".concat(person.age));
    if (person.email) {
        console.log("Email: ".concat(person.email));
    }
}
// Example usage
var person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
};
var person2 = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25
};
displayPersonInfo(person1);
console.log("--------------------");
displayPersonInfo(person2);
