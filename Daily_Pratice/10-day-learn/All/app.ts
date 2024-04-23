// HELLO WORLD //
let message : string = "hello world!"
console.log('message:--->',message);
// HELLO WORLD //


// WHY TS //
let box;
console.log(typeof(box)); // undefined

box = "Hello";
console.log(typeof(box)); // string

box = 100;
console.log(typeof(box)); // number
// WHY TS //

// TS TYPES //

let a = "ajay"
console.log('Length of a :-->',a.length)
console.log('Upper Case of a :-->',a.toUpperCase())

let b:string = "ajsnaj";
console.log('b',typeof b)

let v:any = "asjxs"
console.log('any-types:--->',Math.round(v));

let c : string[] = ["a","b","c"]
console.log('c',c);

let d : [string,number,string] = ["ajay",1,"vighnesh"];
console.log('Tuple:--->',d)

let e:null = null;
console.log('e:--->',typeof e)

// TS TYPES //

// TS ANNOTATIONS //

let firstName : string = "ajay"
let last_Name : string = "vighnesh"
let $sam : string[] = ["ajsnxhsa","dkcbjhbcddc","jhcbajhvda"]
let obj:{
    name : string;
    count : number
};

obj = {
    name : "ajay" ,
    count : 56
}

console.log('firstName:--->',firstName);
console.log('last_Name:--->',last_Name);
console.log('$sam:--->',$sam);
console.log('total-obj:--->',obj);
console.log('1-obj:--->',obj.name);
console.log('2-obj:--->',obj.count);


// TS ANNOTATIONS //


// TS NUMBER //

let f : number = 123e5;
console.log('f:---->',f)

let g:number = 9.52
let g1 = g.toString()
let g2 = g.toExponential(3)
let g3 = g.toFixed(3)
let g4 = g.toPrecision(2)
console.log('g:-->',g);
console.log('g1:-->',typeof g1);
console.log('g2',g2);
console.log('g3',g3);
console.log('g4',g4);


// TS NUMBER //

// TS STRING //

let sample:string = "ajay"
console.log('sample:-->',sample)

let sample1:string = `ajsj
dascajcdc
"dkdd"`
console.log('sample1:-->',sample1)
console.log('length-of-sample1:-->',sample1.length)

let sample2 = new String("sylesh");
console.log('sample2:--->',typeof sample2);

let sample3 = " ajay "
console.log('sample3:-->',sample3.charAt(1));
console.log('sample3:-->',sample3.charCodeAt(2));
console.log('sample3:-->',sample3.slice(-3, -1));

let sample4 = " ajajsj ";
let s1 = sample4.length;
console.log('s1',s1)
let s2 = sample4.trim();
console.log('s2',s2)
console.log('s2-length-after-trim:-->',s2.length)

// TS STRING //


// OBJECT TYPE //

let ss1 : object ;
ss1 = {
    name : "ajay",
    empl_no : 5 ,
    job_title : "developer"
}
console.log('ss1:--->',ss1.name)

// OBJECT TYPE //

// ARRAY TYPE //

let ss2 : string[];
ss2 = ["ajay","vighnesh"]
ss2.push("ajcsnac",3,2)
console.log('ss2:--->',ss2)
console.log('ss2_length:--->',ss2.length)
console.log('ss2_sort:--->',ss2.sort())
console.log('ss2_reverse:--->',ss2.reverse())

let ss3 = ss2.toString()
console.log('ss3:---->',ss3);

let ss4 = ["avv","dvdsvds",5,6]
console.log('type-of-ss4:--->',typeof ss4);

let ans = ss4.join("*")
console.log('ans:--->',ans);
console.log('ans-type:--->',typeof ans);

let arr_name:datatype[][] = [ [1,2,3], [1,2,3] ];  
console.log('arr_name',arr_name);


// ARRAY TYPE //

// FUNCTION //

function add(a:number,b:number) : number {
return a + b;
}
console.log('addition:-->',add(4,5))

// FUNCTION //


// 11-04-2024 //

 // Function //

// Function that adds two numbers and returns the result
function addNumbers(a: number, b: number): number {
    return a + b;
  }
  
  // Example usage
  const result = addNumbers(5, 3);
  console.log(result); // Output: 8
  

 // Function //

 // Optional Parameters //

// Function that greets a person, with an optional parameter for specifying a greeting
function greetPerson(name: string, greeting?: string): string {
    if (greeting) {
      return `${greeting}, ${name}!`;
    } else {
      return `Hello, ${name}!`;
    }
  }
  
  // Example usage
  console.log(greetPerson("Alice")); // Output: Hello, Alice!
  console.log(greetPerson("Bob", "Good morning")); // Output: Good morning, Bob!
  

 // Optional Parameters //

 // Default Parameters //

 function applyDiscount(price : number, discount :number = 0.05) : number {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95

 // Default Parameters //

 // Rest Parameters //

// Function that calculates the sum of multiple numbers using rest parameters
function sum(...numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
      total += num;
    }
    return total;
  }
  
  // Example usage
  console.log(sum(1, 2, 3)); // Output: 6 (sum of 1, 2, and 3)
  console.log(sum(5, 10, 15, 20)); // Output: 50 (sum of 5, 10, 15, and 20)
  

 // Rest Parameters //

 // Function overloading //

// Function overload for greeting with a name
function greet(name: string): void;

// Function overload for greeting with a name and a custom message
function greet(name: string, message: string): void;

// Implementation of the overloaded function
function greet(name: string, message?: string): void {
  if (message) {
    console.log(`${message}, ${name}!`);
  } else {
    console.log(`Hello, ${name}!`);
  }
}

// Example usage
greet("Alice"); // Output: Hello, Alice!
greet("Bob", "Good morning"); // Output: Good morning, Bob!


 // Function overloading //

// Classes //

// Define a class representing a Car
class Car {
    // Properties
    brand: string;
    model: string;
    year: number;
  
    // Constructor
    constructor(brand: string, model: string, year: number) {
      this.brand = brand;
      this.model = model;
      this.year = year;
    }
  
    // Method to display car information
    displayInfo(): void {
      console.log(`This car is a ${this.year} ${this.brand} ${this.model}.`);
    }
  }
  
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Camry", 2020);
  
  // Call the displayInfo method
  myCar.displayInfo(); // Output: This car is a 2020 Toyota Camry.
  

// Classes // 


// 11-04-2024 //

// IF case //

// Define a function to check if a number is even or odd
function checkEvenOrOdd(num: number): void {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  }
  
  // Example usage
  checkEvenOrOdd(4); // Output: 4 is even.
  checkEvenOrOdd(7); // Output: 7 is odd.
  
// IF case //

// For loop //
// Define a function to print numbers from 1 to a specified limit using a for loop
function printNumbers(limit: number): void {
    for (let i = 1; i <= limit; i++) {
      console.log(i);
    }
  }
  
  // Example usage
  printNumbers(5);
  
// For loop //


// While loop  //

// Define a function to print numbers from 1 to a specified limit using a while loop
function printNumbers1(limit: number): void {
    let i = 1;
    while (i <= limit) {
      console.log(i);
      i++;
    }
  }
  
  // Example usage
  printNumbers1(5);
  

// While Loop //


// SWITCH CASE  //

// Define a function that takes a day number and returns the name of the day
function getDayName(dayNumber: number): string {
    let dayName: string;

    switch (dayNumber) {
        case 0:
            dayName = "Sunday";
            break;
        case 1:
            dayName = "Monday";
            break;
        case 2:
            dayName = "Tuesday";
            break;
        case 3:
            dayName = "Wednesday";
            break;
        case 4:
            dayName = "Thursday";
            break;
        case 5:
            dayName = "Friday";
            break;
        case 6:
            dayName = "Saturday";
            break;
        default:
            dayName = "Invalid day number";
    }

    return dayName;
}

// Example usage
console.log(getDayName(1)); // Output: Monday
console.log(getDayName(8)); // Output: Invalid day number



// SWITCH CASE  //


let arr = ["acas","ascacs"]
arr[4] = "orange"
console.log('arrleng:-->',arr.length)
console.log('arrstr:-->',arr.toString())

