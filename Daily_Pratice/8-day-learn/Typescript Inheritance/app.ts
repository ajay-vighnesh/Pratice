class Person {
    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee extends Person {
    constructor(firstName: string,lastName: string,private jobTitle: string) 
    {
        // call the constructor of the Person class:
        super(firstName, lastName);
    }
   
}

let employee = new Employee('John', 'Doe', 'Web Developer');

console.log(employee.getFullName());
console.log(employee.describe());


// Method Overriding //

class Person1 {

    constructor(private firstName: string, private lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        
    }
    
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

class Employee1 extends Person1 {
    constructor(
        firstName: string,
        lastName: string,
        private jobTitle: string) {

        super(firstName, lastName);
    }

    describe(): string {
        return super.describe() + `I'm a ${this.jobTitle}.`;
    }
    
}



const person2 = new Person1('ajay','vighnesh')
const employee2 = new Employee1('ajay','vighnesh','dev')


console.log('person2:-->',person2.describe());
console.log('employee2:--->',employee2.describe());

