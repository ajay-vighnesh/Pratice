interface Sample {
    firstName : string;
    lastName : string;
}

function getSample(person : Sample){
    return `${person.firstName} ${person.lastName}`
}

let names = {
    firstName: 'abc',
    lastName: 'def',
    age: 22
};

let fullName = getSample(names)
console.log('fullName:--->',fullName);


// Real Life Example //

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    email?: string;
}

// Function to display information about a person
function displayPersonInfo(person: Person) {
    console.log(`Name: ${person.firstName} ${person.lastName}`);
    console.log(`Age: ${person.age}`);
    if (person.email) {
        console.log(`Email: ${person.email}`);
    }
}

// Example usage
let person1: Person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john@example.com"
};

let person2: Person = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25
};

displayPersonInfo(person1);
console.log("--------------------");
displayPersonInfo(person2);

