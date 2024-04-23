class Student {
    static count:number = 0;
    constructor (private firstName:string,private lastName:string){
        this.firstName = firstName;
        this.lastName = lastName; 
        
            Student.count++;
        
    }
}

let john = new Student('John', 'Doe');
let jane = new Student('Jane', 'Doe');

console.log(Student.count); // 2


// Static methods //

class Student1{
  private static count1 : number = 0;
    constructor (private firstName1:string, private lastName1:string){
        this.firstName1 = firstName1;
        this.lastName1 = lastName1; 
        Student1.count1++;
    }
        
    public static getCount() { 
        return Student1.count1;

        }
    
}

let john1 = new Student1('John', 'Doe');
let jane1 = new Student1('Jane', 'Doe');

console.log(Student1.getCount()); // 2


// Real Life Example //

class Car {
   private static numberOfCars: number = 0;
  
    constructor(public brand: string) {
        this.brand = brand;
      Car.numberOfCars++;
    }
  
   
    public static displayNumberOfCars() { 
        console.log(`Total number of cars: ${Car.numberOfCars}`);
        }
  }
  
  const car1 = new Car("Toyota");
  const car2 = new Car("Honda");
  const car3 = new Car("Honda");
  
  console.log(Car.displayNumberOfCars()); // Output: Total number of cars: 2
  