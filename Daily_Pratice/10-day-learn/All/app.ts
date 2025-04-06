


// // function twoSum(nums: number[], target: number): number[] {
// // console.log('finc')
// //   for (let i=0;i<=nums.length;i++){
// //       for (let j=1;j<=nums.length;j++){
// //           if(nums[i] + nums[j] === target){
// //             return [i,j]

// //           }
         
// //       }
// //   }
// //   return []

// // };
// // let nums = [2,5,5,11];
// // let target = 10
// // console.log(twoSum(nums,target))



// function findMedianSortedArrays(nums1: number[], nums2: number[]): any {
//      nums1.concat(nums2).sort().length/2
//      console.log(nums1.concat(nums2).sort().length/2)
//     // console.log(nums3,'nums3')

//     // nums4 = nums3.sort()
//     // console.log(nums4,'nums4')

//     // nums5 = nums4.length/2
//     // console.log(nums5)
// };

//  let nums1 = [1,3]
// let nums2 = [2,4]
// let nums3
// let nums4 , nums5
// console.log(findMedianSortedArrays(nums1,nums2))




// let x = 1000021



// let x1 = x.toString().split('').reverse().join('')
// console.log(x1,'x1')
// console.log(typeof x1,'type x1')





// let s = "0P"
// let result = s.toLowerCase().replace(/['`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/:,/ /]+/g,"")
// let result1 = result.split('').reverse().join('').replace(/['`~!@#$%^&*()_|+-=?;:'",.<>\{\}\[\]\\\/:,/ /]+/g,"")
// console.log(result,'result')
// console.log(result1,'result1')


let s1 = "apple apple", s2 = "banana"
let s3 = s1.length
let s4 = s1.split(' ')
let s5 = s2.split(' ')
let output:string[]=[]
let output1:string[]=[]
s4.map((item, index) => {
    if (s5[index] === item) {
        output.push(item);
    } else {
        output1.push(item, s5[index]);
    }
});
console.log(output,'output')
console.log(output1,'output1')

// console.log(s4,'s4')

// if(s1 == s2){
//     console.log('true')
// }
// else{
//     console.log('false')
// }
// console.log(s3,'s3')


/////////////////////////////////////////////////////////////////////

let a1 = [] ;  // An empty array
console.log(a1);

let a2 = new Array(5);   // Creates an array of length 5, filled with empty slots
console.log(a2,'a2')

let a3 = [1, 2, 3];
console.log(a3.at(1)); // 2
console.log(a3.at(-1)); // 3

let a4 = [1, 2];
let a5 = [3, 4];
let combined = a4.concat(a5); 
console.log(combined,'combined');    // [1, 2, 3, 4]


let a6 = [1, 2, 3];
console.log(a6.constructor); // function Array() { [native code] }

let a7 = [1, 2, 3, 4, 5];
a7.copyWithin(0, 3); // [4, 5, 3, 4, 5]
console.log(a7,'a7');








