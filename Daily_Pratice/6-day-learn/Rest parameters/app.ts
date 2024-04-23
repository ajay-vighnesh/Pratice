function values(...args) {
    let sample = 0;
    for (let arg of args) {
        sample = sample + arg;
    }
    return sample;
  }
  
  let x = values(5,4,6,7,8);
  console.log('1_st_x:-->',x)


  // Rest parameter with spread operator //

  function add(a:number, ...b:number[]){
   let sum = a;
   console.log('sum:->',sum);
    for (let num of b) {
      sum = sum + num;
    }
    return sum;
  }
console.log('add:->',add(5,...[2,3,5]))
console.log('a:->',...[1,2,3])
console.log('a1:->',[1,2,3])




function calculateAverage (...numbers){
    let sum = 0;
for ( let number of numbers){
    sum = sum + number
}
return sum = sum / numbers.length
}

console.log('1_st_calculateAverage',calculateAverage(5, 10, 15)); 
console.log('2_nd_calculateAverage',calculateAverage(2, 4, 6, 8, 10)); 



// String Interpolation //

function placeOrder(customerName: string, ...items:string[]) {
    console.log(items);
    console.log(`Order received from ${customerName}:`);
    for (let item of items) {
      console.log(`-> ${item}`);
    }
  }
  
  // Example usage:
  placeOrder("ajay", "Burger", "Fries", "Soda");
  