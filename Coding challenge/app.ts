// Concatenation of Array //

function getConcatenation(nums: number[]): number[] {
    let len = nums.length

    for (let i = 0; i < len; i++) {

        nums.push(nums[i])
    }
    return nums
};

console.log(getConcatenation([1,2,1]))



// shuffle array 

function shuffle(nums: number[], n: number): number[] {
    let result : number[] = [];

    for (let i = 0; i < n; i++) {
        result.push(nums[i]);
        result.push(nums[n + i]);
    }

    return result;
};

console.log('shuffle',shuffle([2,3,4,5,1,7],3))