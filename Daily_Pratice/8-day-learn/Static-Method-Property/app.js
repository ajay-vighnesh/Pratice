var Student = /** @class */ (function () {
    function Student(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
        Student.count++;
    }
    Student.count = 0;
    return Student;
}());
var john = new Student('John', 'Doe');
var jane = new Student('Jane', 'Doe');
console.log(Student.count); // 2
// Static methods //
var Student1 = /** @class */ (function () {
    function Student1(firstName1, lastName1) {
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        this.firstName1 = firstName1;
        this.lastName1 = lastName1;
        Student1.count1++;
    }
    Student1.getCount = function () {
        return Student1.count1;
    };
    Student1.count1 = 0;
    return Student1;
}());
var john1 = new Student1('John', 'Doe');
var jane1 = new Student1('Jane', 'Doe');
console.log(Student1.getCount()); // 2
// Real Life Example //
var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
        this.brand = brand;
        Car.numberOfCars++;
    }
    // static displayNumberOfCars() {
    //   console.log(`Total number of cars: ${Car.numberOfCars}`);
    // }
    Car.displayNumberOfCars = function () {
        console.log("Total number of cars: ".concat(Car.numberOfCars));
    };
    Car.numberOfCars = 0;
    return Car;
}());
var car1 = new Car("Toyota");
var car2 = new Car("Honda");
var car3 = new Car("Honda");
console.log(Car.displayNumberOfCars()); // Output: Total number of cars: 2
