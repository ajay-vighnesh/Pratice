type MyType = string | number;


function exampleFunction(value: MyType) {
    
    if (typeof value === "string") {
        
        console.log("Value is a string:", value.toUpperCase());
    } else {
        
        console.log("Value is a number:", value.toFixed(2));
    }
}


exampleFunction("hello"); 
exampleFunction(3.14159); 


let input1 = '10';
let input2 = '10'
function add(x, y) {
    return x + y;
 }

 let result = add(input1, input2);
 console.log(result); // result of concatenating strings


 let bin = 0b100;
let anotherBin: number = 0B010;
console.log(bin,'bin');
console.log(anotherBin,'anotherBin');

let employee:object
employee = {
    name1 : "ajay",
    age : 10,
}

console.log(employee,'employee');


const fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";
console.log(fruits,'fruits');
let fru = fruits.length
let fru1 = fruits.toString()
console.log(fru,'length of fruits');
console.log(fru1,'string of fruits');



let sa:number = 567268
let saa = sa.toString()
console.log(typeof saa,'saa');
let saa1 = saa.split('').reverse()
let saa2 = saa1.join('')
console.log(saa1,'saa1');
console.log( saa2,'saa2');




// let sa1 = sa.sort()
// console.log(sa1,'sort array');

// let sa2 = sa1.reverse()
// console.log(sa2,'sort and reverse array');

