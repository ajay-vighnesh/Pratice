// Ternary Operator

const max = 100;
let counter = 100;

counter < max ? counter++ : counter = 1;

console.log(counter);

// Else If

let discount: number;
let itemCount = 10;

if (itemCount > 0 && itemCount <= 5) {
    discount = 5;  // 5% discount
} else if (itemCount > 5 && itemCount <= 10) {
    discount = 10; // 10% discount 
} else {
    discount = 15; // 15%
}

console.log(`You got ${discount}% discount. `)


