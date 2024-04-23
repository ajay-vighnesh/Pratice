function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
   return a + b;
}
console.log(add('hai','hello'));
console.log(add(10,20));


function sum (a:number , b:number): number;
function sum (a:string , b:string , c:string) : string ;
function sum (a:any, b:any , c?:any) : any {
if (c){
    return a + b + c;
}
else{
    return a + b;
}
}
console.log(sum('hai','hello','aaa'))
console.log(sum(5,5))


// //



// //

// Function overloads
function calculateArea(shape: "circle", radius: number): number;
function calculateArea(shape: "rectangle", width: number, height: number): number;
function calculateArea(shape: "square", side: number): number;

// Implementation
function calculateArea(shape: string, ...args: any[]): number {
    if (shape === "circle") {
        const [radius] = args;
        return Math.PI * radius * radius;
    } else if (shape === "rectangle") {
        const [width, height] = args;
        return width * height;
    } else if (shape === "square") {
        const [side] = args;
        return side * side;
    } else {
        throw new Error("Unsupported shape");
    }
}

// Usage
console.log(calculateArea("circle", 5)); // Calculate area of circle with radius 5
console.log(calculateArea("rectangle", 4, 6)); // Calculate area of rectangle with width 4 and height 6
console.log(calculateArea("square", 3)); // Calculate area of square with side length 3
