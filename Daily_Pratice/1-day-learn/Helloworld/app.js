var message = 'Hello, World!';
console.log(message);
// OBJECT 
var person;
person = {
    name: 'John',
    age: 24
}; // valid
console.log(person.name);
console.log(person.age);
var count;
count = 10;
console.log(count);
// ARRAY
var names = ['ajay', 'vighnesh', '1', '2'];
console.log(names);
// BINARY NUMBER
var bin = 5;
console.log(bin);
// OCTAL NUMBER
var oct = 64;
console.log('the oct is', oct);
// HEXA NUMBER
var hexa = 0XE;
console.log(hexa);
// MULTI-LINE STRING  
var description = "this\najsajcac\nanjcanjcac";
console.log(description);
// STRING INTERPOLATIONS
var fname = 'ajay';
var title = 'Developer';
var profile = "Hi, I am ".concat(fname, ", and i am a ").concat(title);
console.log(profile);
// OBJECT TYPE
var employee;
employee = {
    firstName: 'John',
    lastName: 'Doe',
    age: 24,
    jobTitle: 'Web Developer'
};
console.log(employee);
var box;
box = "hello";
box = 100;
console.log(typeof box);
;
function getProduct(id) {
    return {
        id: id,
        name: "Awesome Gadget ".concat(id),
        price: 99.5
    };
}
var product = getProduct(1);
console.log("The product ".concat(product.name, " costs $").concat(product.price));
// Type annotation //
var pcount = 5;
console.log(pcount);
var scount = 'sample';
console.log(scount);
// Array //
var sample;
sample = ["ajay", "vicky", "bala"];
console.log(sample);
// TEST //
// Only show the result of palandrome //
var palindrom = function (phrase) {
    var original = phrase.toLowerCase().replace(/[^A-Z a-z 0-9]/g, '');
    var reversed = original.split('').reverse().join('');
    return original === reversed;
};
console.log(palindrom("aba"));
// Change the palindrome to * //
// palindrom //
var palan = "Hi madam bobby has a bob";
var arraypalan = palan.split(" ");
var finalpalan = '';
for (var _i = 0, arraypalan_1 = arraypalan; _i < arraypalan_1.length; _i++) {
    var i_1 = arraypalan_1[_i];
    var str_1 = i_1.split('').reverse().join().replace(/,/g, '');
    if (i_1 === str_1 && i_1.length !== 1) {
        finalpalan += i_1.replace(/[a-z A-Z]/g, '*') + ' ';
    }
    else {
        finalpalan += i_1 + ' ';
    }
}
console.log('Final Result:', finalpalan);
// OCCURRENCE //
var str = 'ajay vighnesh v';
var result = {};
for (var i_2 = 0; i_2 < str.length; i_2++) {
    var ch = str.charAt(i_2);
    console.log(ch);
    if (!result[ch]) {
        result[ch] = 1;
    }
    else {
        result[ch] += 1;
    }
}
console.log(typeof result);
console.log("The occurrence of each letter in given string is:", result);
// FOR LOOP //
for (var i_3 = 0; i_3 < 10; i_3++) {
    console.log('i inside the for loop', i_3);
}
;
var i = 0;
for (; i < 10; i++) {
    console.log('i outside the for loop ', i);
}
;
for (var i_4 = 0;; i_4++) {
    console.log('i at outside:', i_4);
    if (i_4 > 9)
        break;
}
