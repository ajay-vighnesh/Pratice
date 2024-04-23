function add(a:number , b:number = 1):number {

    return a + b
}

console.log(add(5))


function applyDiscount(price : number, discount :number = 0.05) : number {
    return price * (1 - discount);
}
console.log(applyDiscount(100)); // 95


// Multiply the number //
function multiplynum(a:number, b:number = 6) : number{
    return a * b  ;
}

console.log('change:-->',multiplynum(2,5))



function displayName(name: string, statement: string = "Hello") : string {  
    return statement + ' ' + name ;  
}  
console.log(displayName('Arun'));
console.log(displayName('ajay', 'Hi'));     



