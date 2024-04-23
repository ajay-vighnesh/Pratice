class Person {
    public ssn: string;
    public firstName: string;
    public lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }

}

let person = new Person('153-07-3130', 'John', 'Doe');
console.log('1st',person.firstName); // compile error



// private example //

class Person1 {
    private ssn: string;
    private firstName: string;
    private lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getSSN(): string {
        return this.ssn; 
    }

    getFirstName(): string {
        return this.firstName; 
    }

    getLastName(): string {
        return this.lastName; 
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}

let person1 = new Person1('153-07-3130', 'John', 'Doe');
console.log(person1.getFirstName()); // John
console.log(person1.getLastName()); // Doe
console.log(person1.getFullName()); // John Doe
console.log(person1.getSSN()); // 153-07-3130



// Protected Example //


class Person3 {
    protected ssn: string;
    protected firstName: string;
    protected lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`; 
    }
}
// Subclass of Person //
class Employee extends Person3 {
// Employee is a child class and the Person3 is the parent class. //

    private employeeId: number;

    constructor(ssn: string, firstName: string, lastName: string, employeeId: number) {
         
        // call the constructor of the Person class:
        super(ssn, firstName, lastName);
        
        this.employeeId = employeeId;
    }

    getEmployeeId(): number {
        return this.employeeId;
    }

    getSSN(): string {
        // Accessing the protected property from the subclass
        return this.ssn; 
    }
}

let employee = new Employee('153-07-3130', 'John', 'Doe', 1001);
console.log(employee.getFullName()); // John Doe
console.log(employee.getEmployeeId()); // 1001
console.log(employee.getSSN()); // 153-07-3130
