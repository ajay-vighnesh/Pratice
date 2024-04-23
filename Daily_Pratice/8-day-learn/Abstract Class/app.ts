abstract class Employee{
    constructor (private firstName:string, private lastName:string){
    }
    abstract getSalary(): number
    get fullName(): string{
        return `{this.firstName} ${this.lastName}`;
    }
    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

// ABSTRACT CLASS does not call through Object 

// let employee = new Employee('John','Doe'); 

class ExtraEmployee extends Employee{
    constructor (firstName:string , lastName:string,private salary:number, private rate:number, private hours:number){
        super (firstName,lastName);
    }
    getSalary():number {
        return this.rate * this.hours;
    }
}

let john = new ExtraEmployee('John', 'Doe', 12000,100,160);


console.log(john.compensationStatement());


// Real Life Example //

abstract class Shape {
    constructor(public color: string, public position: { x: number, y: number }) {}

    abstract calculateArea(): number;
    abstract draw();
}

class Circle extends Shape {
    constructor(public color: string, public position: { x: number, y: number }, private radius: number) {
        super(color, position);
    }

    calculateArea(): number {
        return 3.14 * this.radius * this.radius;
        
    }

    draw() {
        console.log(`Drawing a ${this.color} circle at (${this.position.x}, ${this.position.y}) with radius ${this.radius}`);
    }
}

class Rectangle extends Shape {
    constructor(public color: string, public position: { x: number, y: number }, private width: number, private height: number) {
        super(color, position);
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    draw() {
        console.log(`Drawing a ${this.color} rectangle at (${this.position.x}, ${this.position.y}) with width ${this.width} and height ${this.height}`);
    }
}

// Usage
let circle = new Circle("red", { x: 10, y: 20 }, 5);
let rectangle = new Rectangle("blue", { x: 30, y: 40 }, 10, 15);

console.log("Circle area:", circle.calculateArea());
circle.draw();

console.log("Rectangle area:", rectangle.calculateArea());
rectangle.draw();

