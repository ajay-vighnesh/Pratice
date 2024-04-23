//  1. Write a program that reads an array of int and outputs the maximum product
//  of two adjacent elements in the given array of numbers.
//  Sample O/P:
//  Enter number of number to find the product..
//  4
//  Enter 4 numbers
//  9
//  9
//  4
//  5
//  The maximum product: 81


// 2. Write a program that reads an array of ints and outputs the length of the
//    longest sequence in strictly ascending order. Print the elements of longest
//    ascending sequence in an array Elements of the sequence must go one after
//    another. A single number is assumed to be an ordered sequence with the length= 1.

//    Enter the number of elements 
//    5
//    Enter 5 numbers in any order to find the longest ascending sequence

//    45
//    40
//    0
//    39
//    10
//    The max value is : 2
//    2numbers in ascending order
//    0 39


function longestAscendingSequenceLength(arr: number[]): number {
    // This line defines a function named longestAscendingSequenceLength which takes an array of numbers (arr) as input and returns a number (specifically, the length of the longest strictly ascending sequence).
    if (arr.length === 0) return 0;

    let maxLength = 1;
    let currentLength = 1;

    let longestSeqStartIndex = 0;
    let currentSeqStartIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                longestSeqStartIndex = currentSeqStartIndex;
            }
            currentLength = 1;
            currentSeqStartIndex = i;
        }
    }

    // Check if the last sequence is the longest
    if (currentLength > maxLength) {
        maxLength = currentLength;
        longestSeqStartIndex = currentSeqStartIndex;
    }

    console.log(`The max value is: ${maxLength}`);
    console.log(`${maxLength} numbers in ascending order`);

    for (let i = longestSeqStartIndex; i < longestSeqStartIndex + maxLength; i++) {
        console.log(arr[i]);
    }

    return maxLength;
}

// Example usage:
const numElements = 5;
const numbers = [45, 40, 20, 30, 35, 0 , 10]; // You can replace this with user input

// console.log(`Enter the number of elements: ${numElements}`);
// console.log("Enter 5 numbers in any order to find the longest ascending sequence");
console.log(longestAscendingSequenceLength(numbers));
