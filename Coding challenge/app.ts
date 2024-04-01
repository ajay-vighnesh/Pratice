// Concatenation of Array //

// 1929. Concatenation of Array

function getConcatenation(nums: number[]): number[] {
    let len = nums.length
    console.log('len',len)
    for (let i = 0; i < len; i++) {

        nums.push(nums[i])
    }
    return nums
};

console.log(getConcatenation([1,2,1]))



// shuffle array 

// 1470. Shuffle the Array

function shuffle(nums: number[], n: number): number[] {
    let result : number[] = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }

    return result;
};

console.log('shuffle',shuffle([2,3,4,5,1,7],3))


let nums : number [];
nums = [2,7,11,15];
let target : number;


// 1929. Concardinate Array Start //

let samp : number [];
samp = [1,2,3];
let n = samp.length;
console.log(n);

let samp1 ;
samp1 = 2*samp.length;
console.log(samp1)

for (let i=0;i<n;i++){
    samp.push(samp[i])
    console.log('samp',samp)
}

// 1929. Concardinate Array End //

// 1920. Build Array from Permutation start //

let samp2 : number [];
samp2 = [0,2,1,5,3,4];
let samp3 : number [] = [];
// samp3 = samp2;

for(let i=0 ; i<samp2.length ; i++){
    samp3 [i] = samp2[samp2[i]]
    console.log(samp3 [i]);
}

// 1920. Build Array from Permutation end //


// 1512. Number of Good Pairs start //

let nmb : number [] ;
nmb = [1,2,3,1,1,3];
let count = 0;

for (let i = 0 ; i<nmb.length ; i++) {
    for(let j = i+1 ; j < nmb.length ; j++) {
        if (nmb[i] == nmb[j]){
            count++;
        }
    
    }
    
    
}
console.log('count :',count)

// 1512. Number of Good Pairs end //

// 2011. Final Value of Variable After Performing Operations start //

let operators : string[];
operators = ['--x','x++','x++'] ;
let x = 0;

for (let i = 0 ; i<operators.length ; i++){
    if (operators[i] == '--x' || operators[i] == 'x--'){
        x = x-1;
    }
    else  {
        x = x + 1;
    }
    
}
console.log(x);


// 2011. Final Value of Variable After Performing Operations End //
