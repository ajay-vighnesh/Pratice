class Person {
    readonly name: string;
    private readonly age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    // Method to change the name
    changeName(newName: string) {
        // Check if the new name is different from the current name
        if (newName !== this.name) {
            console.log(`Changing name from ${this.name} to ${newName}.`);
            this.name = newName; // Update the name
        } else {
            console.log(`Name is already ${newName}. No change required.`);
        }
    }

    // Method to increment the age
    incrementAge() {
        console.log(`Incrementing age for ${this.name} from ${this.age} to ${this.age + 1}.`);
        // Update the age
        // Since age is readonly, we cannot directly increment it, but we can create a new Person object with updated age
        const newPerson = new Person(this.name, this.age + 1);
        return newPerson;
    }
}

const person = new Person("Bob", 30);
person.greet(); // Output: Hello, my name is Alice and I am 30 years old.

person.changeName("Bob"); // Output: Changing name from Alice to Bob.
person.greet(); // Output: Hello, my name is Bob and I am 30 years old.

const newPerson = person.incrementAge();
newPerson.greet(); // Output: Hello, my name is Bob and I am 31 years old.
