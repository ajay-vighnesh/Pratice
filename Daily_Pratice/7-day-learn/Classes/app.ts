class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.ssn} ${this.firstName} ${this.lastName}`;
    }
}

let person = new Person('171-28-0926', 'John', 'Doe');
console.log(person.getFullName());


// Real Case Class Example //

// Define a class representing a rectangle
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Create an instance of the Rectangle class
const myRectangle = new Rectangle(5, 10);

// Calculate and print the area of the rectangle
console.log("Area of the rectangle:", myRectangle.calculateArea());


// Object Real Case Example //

// Define a class representing a rectangle
class ObjectRectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea(): number {
        return this.width * this.height;
    }
}

// Create objects representing different rectangles
const rectangle1 = new ObjectRectangle(5, 10);
const rectangle2 = new ObjectRectangle(3, 7);
const rectangle3 = new ObjectRectangle(8, 4);

// Calculate and print the area of each rectangle
console.log("Area of rectangle 1:", rectangle1.calculateArea());
console.log("Area of rectangle 2:", rectangle2.calculateArea());
console.log("Area of rectangle 3:", rectangle3.calculateArea());


// Employee details //

class Employee {
    empCode: number;
    empName: string;

    constructor(code: number, name: string) {
        this.empName = name;
        this.empCode = code;
    }

    getSalary(): number {
        return 10000;
    }
}


// Classes Example //

class Sample {
    name: string;
    message: string;

    constructor(name: string, message: string) {
        this.name = name;
        this.message = message;
    }

    greet(): string {
        return `hello, my name is ${this.name} and my message is ${this.message}`;
    }
}

let sample1 = new Sample("ajay", "hiii");
console.log('sample1:--->', sample1.greet());


// We define a class Person with properties name and age, and a method greet().

// The constructor is a special method used for initializing object instances.It takes parameters name and age and assigns them to the corresponding properties of the object.

// The greet() method returns a greeting message containing the person's name and age.

// We create an instance of the Person class named person1 with the name "Alice" and age 30.

// Finally, we call the greet() method on the person1 object to print the greeting message.

// The purpose of classes in TypeScript is to provide a way to model real - world entities or abstract concepts by bundling together related data and functionality.They promote code reusability, maintainability, and organization by allowing you to create multiple objects with similar characteristics and behaviors.Classes also support inheritance, encapsulation, and polymorphism, which are important principles in object - oriented programming.


