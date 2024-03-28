let message: String = 'Hello, World!';
console.log(message);

// OBJECT 
let person: {
    name: string;
    age: number
 };
 
 person = {
    name: 'John',
    age: 24
 }; // valid

 console.log(person.name);
 console.log(person.age);

 let count : number;
 count = 10;
 console.log(count);

 // ARRAY
 let names : string[] = ['ajay','vighnesh','1','2']
 console.log(names);

 // BINARY NUMBER
 let bin : number = 0b101;
 console.log(bin);

 // OCTAL NUMBER
 let oct : number = 0o100;
 console.log('the oct is',oct);

 // HEXA NUMBER
 let hexa : number = 0XE;
 console.log(hexa);

// MULTI-LINE STRING  
let description = `this
ajsajcac
anjcanjcac`;

console.log(description);

// STRING INTERPOLATIONS
let fname : string = 'ajay';
let title : string = 'Developer'
let profile :string = `Hi, I am ${fname}, and i am a ${title}`
console.log(profile);

// OBJECT TYPE

let employee: object;

employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    jobTitle: 'Web Developer'
};



console.log(employee);

let box;
box = "hello";
box = 100;
console.log(typeof box);

// function getProduct(id){
//     return {
//       id: id,
//       name: `Awesome Gadget ${id}`,
//       price: 99.5
//     }
//   }
//   const product = getProduct(1);
//   console.log(`The product ${product.name} costs $${product.price}`);  

  // How Typescript solves the problems of dynamic types
  interface Product{
    id: number,
    name: string,
    price: number
};

function getProduct(id) : Product{
    return {
      id: id,
      name: `Awesome Gadget ${id}`,
      price: 99.5
    }
  }
  const product = getProduct(1);
console.log(`The product ${product.name} costs $${product.price}`);

// Type annotation //

let pcount : number = 5;
console.log(pcount);

let scount : string = 'sample';
console.log(scount);

// Array //
let sample : string[];
sample = ["ajay","vicky","bala"];
console.log(sample);

// TEST //

// Only show the result of palandrome //
const palindrom = (phrase: string): boolean => {
    const original = phrase.toLowerCase().replace(/[^A-Z a-z 0-9]/g, '');
    const reversed = original.split('').reverse().join('');

    return original === reversed
}

console.log(
    palindrom("aba")
)

// Change the palindrome to * //

// palindrom //
let palan = "Hi madam bobby has a bob"

let arraypalan:string[] = palan.split(" ")

let finalpalan:string=''

for (let i of arraypalan){
  let str = i.split('').reverse().join().replace(/,/g,'')
  if(i === str && i.length!==1){
    finalpalan+=i.replace(/[a-z A-Z]/g, '*')+' '
  }
  else {
    finalpalan+=i + ' '
  }
  }

console.log('Final Result:',finalpalan)


// OCCURRENCE //

let str:string = 'ajay vighnesh v'

let result = {}
for(let i = 0;i< str.length;i++){ 
let ch = str.charAt(i) 
console.log(ch);
if(!result[ch]){ 
	result[ch] =1; 
} 
else{ 
	result[ch]+=1 
} 
} 
console.log(typeof result)
console.log( 
	"The occurrence of each letter in given string is:",result)

// FOR LOOP //

for (let i=0;i<10;i++){
  console.log('i inside the for loop',i)
};

let i = 0;
for (;i<10;i++){
  console.log('i outside the for loop ',i)
};

for (let i = 0; ; i++) {
  console.log('i at outside:',i);
  if (i > 9) break;
}