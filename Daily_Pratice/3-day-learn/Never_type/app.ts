function cancel (message : string ) : never {
    throw new Error(message);
}

let loop = function forever() {
    while (true) {
        console.log('Hello');
    }
}


function demo (a: number | string ) : boolean {
if (typeof a === 'string'){
    return true;
} 
else if (typeof a === 'number') {
    return false ;   
}
}

console.log(demo('ahdahsb'));


function demo1 (a : string | number ) : boolean  {
if (typeof a === 'string'){
    return true ;
}
else if (typeof a === 'number'){
    return false ;
}
return neverOccur();
}
let neverOccur = () => {
    throw new Error ('Never!');
}

console.log(demo1(1));