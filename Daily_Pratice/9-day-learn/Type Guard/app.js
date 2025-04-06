function exampleFunction(value) {
    if (typeof value === "string") {
        console.log("Value is a string:", value.toUpperCase());
    }
    else {
        console.log("Value is a number:", value.toFixed(2));
    }
}
exampleFunction("hello");
exampleFunction(3.14159);
var input1 = '10';
var input2 = '10';
function add(x, y) {
    return x + y;
}
var result = add(input1, input2);
console.log(result); // result of concatenating strings
var bin = 4;
var anotherBin = 2;
console.log(bin, 'bin');
console.log(anotherBin, 'anotherBin');
var employee;
employee = {
    name1: "ajay",
    age: 10,
};
console.log(employee, 'employee');
var fruits = ["Banana", "Orange", "Apple"];
fruits[6] = "Lemon";
console.log(fruits, 'fruits');
var fru = fruits.length;
var fru1 = fruits.toString();
console.log(fru, 'length of fruits');
console.log(fru1, 'string of fruits');
var sa = 567268;
var saa = sa.toString();
console.log(typeof saa, 'saa');
var saa1 = saa.split('').reverse();
var saa2 = saa1.join('');
console.log(saa1, 'saa1');
console.log(saa2, 'saa2');
// let sa1 = sa.sort()
// console.log(sa1,'sort array');
// let sa2 = sa1.reverse()
// console.log(sa2,'sort and reverse array');
