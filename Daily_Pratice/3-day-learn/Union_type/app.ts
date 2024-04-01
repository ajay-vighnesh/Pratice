function demo (a: any, b:any ) {
if (typeof a ==='string' && typeof b ==='string'){
    return a.concat(b);
}
else if (typeof a ==='number' && typeof b ==='number') {
    return a + b;
}
    throw new Error('Parameters must be numbers or strings');
// else{
//     return ('false')
// }
}

console.log(demo(7,2))


let result : string | number | boolean 
result = 10;
result = 'sajcsba';
result = true;
console.log(result);