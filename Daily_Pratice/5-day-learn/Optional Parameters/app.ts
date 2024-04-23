let add = function(a:number, b:number , c?:number){
    return a + b + (c || 0);
}

let d = add(5,5,5);

console.log(d);



function multiply(a: number, b: number, c?: number): number {
    console.log(typeof c)
    if (c) {
        
        return a * b * c;
    }
    return a * b;
}

let e = multiply(1,2)
console.log(e);