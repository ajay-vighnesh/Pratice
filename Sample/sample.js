var v;
v = 32.6; // no error as it can be "any" type
// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in
console.log(Math.round(v)); // no error as it can be "any" type
var cars = [];
cars = ["Saab", "Volvo", "BMW"];
console.log('cars:-->', cars);
var ab;
ab = new Array("aj", "vj", "arr");
console.log('ab:--->', ab);
console.log('ab_to_string:--->', ab.toString());
console.log('ab_ascen:--->', ab[1]);
// Section 3. Control Flow Statements //
// (1) IF..ELSE STATEMENT //
// Suppose you're building a simple e-commerce application and you want to calculate the shipping cost based on the user's location.
// Define a function to calculate shipping cost based on the destination.
function calculateShippingCost(destination) {
    var shippingCost;
    // Use an if...else statement to determine the shipping cost based on the destination.
    if (destination === 'domestic') {
        shippingCost = 5; // Domestic shipping costs $5
    }
    else if (destination === 'international') {
        shippingCost = 15; // International shipping costs $15
    }
    else {
        shippingCost = 0; // Default shipping cost if destination is not recognized
    }
    return shippingCost;
}
// Example usage:
var domesticShippingCost = calculateShippingCost('domestic');
console.log('Domestic shipping cost:', domesticShippingCost);
var internationalShippingCost = calculateShippingCost('international');
console.log('International shipping cost:', internationalShippingCost);
var unknownShippingCost = calculateShippingCost('moon');
console.log('Shipping cost to the moon:', unknownShippingCost);
// (2) SWITCH CASE //
// Suppose you're building a simple e-commerce application and you want to calculate the shipping cost based on the user's location.
// Define a function to calculate shipping cost based on the destination.
function calculateShippingCost2(destination) {
    var shippingCost;
    // Use a switch statement to determine the shipping cost based on the destination.
    switch (destination) {
        case 'domestic':
            shippingCost = 5; // Domestic shipping costs $5
            break;
        case 'international':
            shippingCost = 15; // International shipping costs $15
            break;
        default:
            shippingCost = 0; // Default shipping cost if destination is not recognized
            break;
    }
    return shippingCost;
}
// Example usage:
var domesticShippingCost2 = calculateShippingCost2('domestic');
console.log('Domestic shipping cost:', domesticShippingCost2);
var internationalShippingCost2 = calculateShippingCost2('international');
console.log('International shipping cost:', internationalShippingCost2);
var unknownShippingCost2 = calculateShippingCost2('moon');
console.log('Shipping cost to the moon:', unknownShippingCost2);
// (3) WHILE LOOP //
