// Using as //


let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

console.log(strLength);
console.log(typeof strLength);


// Using <> //

let someValue1: any = "ajay";
let strLength1: number = (<string>someValue1).length;

console.log(strLength1);
console.log(typeof strLength1);


// //

let value: string | number = "123";


let length1: number = (value as string).length;

console.log(length1); 


