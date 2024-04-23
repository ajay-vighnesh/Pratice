// Function Type Start //

function multiply(a: number, b: number): number {
    return a * b;
}

let c = multiply(4, 5);
console.log(c);

// Function Type End //


// Return a + b Start //

function add(a: number, b: number): number {
    return a + b;
}
let d = add(5, 5);
console.log('d:->', d)

// Return a + b End //

// Return String Start //

function sub(): string {
    return "akjsncajncs";
}
let d1 = sub();
console.log('d1:->', d1)

// Return String End //


// Void Type Start //

function printHello(): void {
    // return ("jhbchabc")
    // console.log('Hello!');
}

printHello();

// Void Type End //


// 04-04-2024 //

// Normal Function Declaration //

function addnumbs(a: number, b: number) {
    return a + b;
}
console.log('addnumbs:->', addnumbs(5, 5))


// Variable Function Declaration //

let sample = "Add the 2 values using function" + ' :-->' + addnumbs(5, 5);
console.log('sample', sample);


// Function() Constructor //
let myFunction;
myFunction = function (a, b) {
    return a * b;
}
let z = myFunction(4, 5)
console.log('z_as_function:->', z)


// Arrow Functions //

let y1 = (x: number, y: number) => x * y
console.log('y1_Arrow_function:-->', y1(5, 5))

