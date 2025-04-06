var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function convertNumber(columnTitle) {
    var result = 0;
    var base = 'A'.charCodeAt(0); // ASCII value of 'A' minus 1 // 65
    for (var i = 0; i < columnTitle.length; i++) {
        var charValue = columnTitle.charCodeAt(i) - base + 1; // 65-65 + 1 (ACTUAL DISTANCE)
        result = result * 26 + charValue; // PERMUTATION 
    }
    return result;
}
// Example usage:
console.log(convertNumber("A")); // Output: 1
console.log(convertNumber("B")); // Output: 2
console.log(convertNumber("Z")); // Output: 26
console.log(convertNumber("AA")); // Output: 27
console.log(convertNumber("AB")); // Output: 28
console.log(convertNumber("FXSHRXW")); // Output: 2147483647
function printNumberSequence(n) {
    var str = '';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            str += "".concat(i);
        }
        console.log(str);
        str = '';
    }
}
printNumberSequence(5);
function star(n) {
    var str = '';
    for (var i = 1; i <= n; i++) {
        for (var j = 1; j <= i; j++) {
            str += "*";
        }
        console.log(str);
        str = '';
    }
}
star(5);
function printPattern(rows) {
    for (var i = 1; i <= rows; i++) {
        var line = '';
        for (var j = 1; j <= i; j++) {
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
var n = [6, 1, 4, 3, 7, 2];
var a = n.length;
console.log(a, 'a');
for (var i = 0; i < a; i++) {
    if (n[i] > n[i + 1]) {
        console.log(n[i] > n[i + 1], 'n[i] > n[i + 1]');
        n[i] = n[i + 1];
        console.log(n[i], 'n[i]');
    }
}
;
// Find the Highest Altitude Start //
var gain = [-5, 1, 5, 0, -7];
var result = [];
var highest;
var sum = 0;
var higher;
for (var i = 0; i < gain.length; i++) {
    sum = sum + gain[i];
    console.log(sum, 'sum');
    result.push(sum);
    console.log('result', result);
    var result1 = Math.max.apply(Math, result);
    console.log(result1, 'result1');
    console.log.apply(console, __spreadArray(__spreadArray([], result, false), ['...result'], false));
}
// Find the Highest Altitude Start //
// Height Checker Start//
var count = 0;
var n1 = [1, 1, 4, 2, 1, 3];
console.log('n1', n1);
var n2 = __spreadArray([], n1, true).sort(function (a, b) {
    return a - b;
});
console.log('n2', n2);
console.log('n1', n1);
for (var i = 0; i < n1.length; i++) {
    if (n1[i] !== n2[i]) {
        count += 1;
    }
}
console.log(count);
// Height Checker End//
// Bubble sort Start //
var arr = [10, 4, 50, 3, 41, 55];
for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
        if (arr[j] > arr[j + 1]) {
            var temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}
console.log('arr:->', arr);
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
var arr1 = [28, 6, 22, 8, 44, 17];
var arr2 = [22, 28, 8, 6];
var count2 = {};
var count3;
arr1.forEach(function (ele) {
    if (count2[ele]) {
        count2[ele] = count2[ele] + 1;
    }
    else {
        count2[ele] = 1;
    }
});
console.log(count2, 'count2');
// for (let i = 0; i<arr2.length;i++){
//     if(arr2[i] == count2.hasOwnProperty(i)){
//     }
// }
for (var _i = 0, arr2_1 = arr2; _i < arr2_1.length; _i++) {
    var j = arr2_1[_i];
    if (count2.hasOwnProperty(j)) {
        console.log(count2[j], 'j');
    }
}
// Reverse String within the same variable Start //
var sarr = ["h", "e", "l", "l", "o", 'r'];
console.log(sarr.length, 'sarr.length');
console.log('s:->', sarr);
for (var i = 0; i < sarr.length / 2; i++) {
    var temp = sarr[i]; // 0 --> h
    // console.log(temp,'temp');
    sarr[i] = sarr[sarr.length - i - 1]; // 0 = sarr[4]
    // console.log(sarr[i],'sarr[i]');
    sarr[sarr.length - i - 1] = temp; // 4 =  1
}
console.log('result:->', sarr);
// Reverse String within the same variable End //
//  Sort an Array Start //
var nums = [5, 2, 3, 1];
console.log(nums, 'nums');
var nums1 = __spreadArray([], nums, true).sort(function (a, b) {
    return a - b;
});
console.log(nums1, 'nums1');
//  Sort an Array End //
// Minimum Number of Moves to Seat Everyone Start //
var sum2 = [];
var seats = [4, 1, 5, 9];
console.log('seats-length', seats.length);
var seats1 = seats.sort(function (a, b) { return a - b; });
console.log('seats1', seats1);
var students = [1, 3, 2, 6];
console.log('students-length', students.length);
var students1 = students.sort(function (a, b) { return a - b; });
console.log('students1', students1);
for (var i = 0; i < students.length; i++) {
    var sum1 = students1[i] - seats1[i];
    console.log(sum1, 'sum1');
    sum2.push(sum1);
    console.log(sum2, 'sum2');
    var sum_1 = sum2.reduce(function (num, val) { return num + val; }, 0);
    var summ = Math.abs(sum_1);
    console.log('summ:--->', summ);
}
// Minimum Number of Moves to Seat Everyone End //
// Unquote Start //
var abc = unquote('"\\e917"');
console.log(abc, 'abc');
function unquote(arg0) {
    throw new Error("Function not implemented.");
}
// Unquote End //
