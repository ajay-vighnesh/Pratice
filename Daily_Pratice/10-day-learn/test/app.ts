function convertNumber(columnTitle: string): number {
    let result = 0;
    let base = 'A'.charCodeAt(0); // ASCII value of 'A' minus 1 // 65

    for (let i = 0; i < columnTitle.length; i++) {
        let charValue = columnTitle.charCodeAt(i) - base + 1; // 65-65 + 1 (ACTUAL DISTANCE)
        result = result * 26 + charValue; // PERMUTATION 
        
    }

    return result;
}

// Example usage:
console.log(convertNumber("A"));       // Output: 1
console.log(convertNumber("B"));       // Output: 2
console.log(convertNumber("Z"));       // Output: 26
console.log(convertNumber("AA"));      // Output: 27
console.log(convertNumber("AB"));      // Output: 28
console.log(convertNumber("FXSHRXW")); // Output: 2147483647





function printNumberSequence(n: number): void {
    let str:string=''
    for (let i = 1; i <= n; i++) {
     
        
       
      
        
        for (let j = 1; j <= i; j++) {
           
            str+=`${i}`
           
            
            
        }
        console.log(str)
        str=''
    }
}

printNumberSequence(5); 

function star(n: number): void {
    let str:string=''
    for (let i = 1; i <= n; i++) {
     
        
       
      
        
        for (let j = 1; j <= i; j++) {
           
            str+=`*`
           
            
            
        }
        console.log(str)
        str=''
    }
}

star(5); 


function printPattern(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        let line = '';
        for (let j = 1; j <= i; j++) {
            line += i;
        }
        console.log(line);
    }
}

printPattern(5); 



// let n:number[] = [6,1,4,3,7,2];
// for (let i = 0;i<n.length;i++){
//     console.log('n[i]',n[i]);
//     for (let j=1;j<n.length;j++)  {
//         console.log('n[j]',n[j]);
//         if(n[i]>n[j]){
//             console.log(n[i],'n[i]-->');
//             console.log(n[i]>n[j],'n[i]>n[j]-->');
//         }
//     }
// }

let n:number[] = [6,1,4,3,7,2];
let a = n.length
console.log(a,'a');

for (let i = 0; i < a ; i++) {
    if (n[i] > n[i + 1]) {
        console.log(n[i] > n[i + 1],'n[i] > n[i + 1]');
        
        n[i] = n[i + 1];
        console.log(n[i],'n[i]');
        
    }
};


// Find the Highest Altitude Start //

let gain = [-5,1,5,0,-7]
let result:any[] = []
let highest

let sum = 0
let higher

for (let i=0;i<gain.length;i++){

sum = sum + gain[i] 
console.log(sum,'sum');

 result.push(sum)
console.log('result',result);

let result1 = Math.max(...result)
console.log(result1,'result1');
console.log(...result,'...result');

}

// Find the Highest Altitude Start //


// Height Checker Start//

let count:number=0
let n1 = [1,1,4,2,1,3]
console.log('n1',n1);

let n2 = [...n1].sort((a,b)=>{
   
    return a-b

})
console.log('n2',n2);
console.log('n1',n1);


for (let i=0;i<n1.length;i++){
    if(n1[i] !== n2[i]){
        count +=1
    } 
}
console.log(count);


// Height Checker End//

// Bubble sort Start //

let arr = [10,4,50,3,41,55]

for (let i=0;i<arr.length;i++){
    for(let j=0;j<arr.length-i;j++){
    if(arr[j]>arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp
    }   
}
}

console.log('arr:->',arr);

// Bubble sort End //


// Relative-Sort-Array Start //

// let arr1 = [28,6,22,8,44,17,28,6,28]
// let arr2 = [22,28,8,6]
// let obj:{[key:number]:number} = {}

// for(let i of arr1){
//     if(obj.hasOwnProperty(i)){
//         obj[i]+=1
//     }
//     else{
//         obj[i]=1
//     }
// }
// console.log(obj,'obj');

// Relative-Sort-Array End //


let arr1 = [28,6,22,8,44,17];

let arr2 = [22,28,8,6]

let count2:any = {};
let count3:any
arr1.forEach(ele => {
    if (count2[ele]) {
        count2[ele] = count2[ele] + 1;
    } else {
        count2[ele] = 1;
    }
});
console.log(count2,'count2')

// for (let i = 0; i<arr2.length;i++){
//     if(arr2[i] == count2.hasOwnProperty(i)){
         
//     }
  
// }

for (let j of arr2){
    if(count2.hasOwnProperty(j)){
        console.log(count2[j],'j');
    }
}

// Reverse String within the same variable Start //

let sarr = ["h","e","l","l","o",'r']
console.log(sarr.length,'sarr.length');

console.log('s:->',sarr);

for(let i=0;i<sarr.length/2;i++){
    
let temp = sarr[i]  // 0 --> h
// console.log(temp,'temp');

sarr[i] = sarr[sarr.length-i-1]    // 0 = sarr[4]
// console.log(sarr[i],'sarr[i]');

sarr[sarr.length-i-1] = temp  // 4 =  1

}

console.log('result:->',sarr);


// Reverse String within the same variable End //


//  Sort an Array Start //

let nums = [5,2,3,1]
console.log(nums,'nums');

let nums1 = [...nums].sort((a,b)=>{
    return a - b
})
console.log(nums1,'nums1');

//  Sort an Array End //

// Minimum Number of Moves to Seat Everyone Start //


let sum2:any[] = []
let seats = [4,1,5,9]
console.log('seats-length',seats.length);
let seats1 = seats.sort((a,b)=> {return a-b})
console.log('seats1',seats1);


let students = [1,3,2,6]
console.log('students-length',students.length);
let students1 = students.sort((a,b)=> {return a-b})
console.log('students1',students1);

for (let i=0;i<students.length;i++){
let sum1 = students1[i] - seats1[i]
console.log(sum1,'sum1');
sum2.push(sum1)
console.log(sum2,'sum2');

const sum = sum2.reduce((num, val) => num + val, 0);
let summ = Math.abs(sum)
console.log('summ:--->',summ);
}


// Minimum Number of Moves to Seat Everyone End //


// Unquote Start //




// Unquote End //