// 2011. Final Value of Variable After Performing Operations start //

let operators : string[];
operators = ['--x','x++','x++'] ;
let x1 = 1;

for (let i = 0 ; i<operators.length ; i++){
    if (operators[i] == '--x' || operators[i] == 'x--'){
        x1 = x1-1;
    }
    else  {
        x1 = x1 + 1;
    }
    
}
console.log(x1);


// 2011. Final Value of Variable After Performing Operations End //








// 1108. Defanging an IP Address //
    
    // Given a valid (IPv4) IP address, return a defanged version of that IP address. //
    
    // A defanged IP address replaces every period "." with "[.]". 
        // Example 1:
            // Input: address = "1.1.1.1"
            // Output: "1[.]1[.]1[.]1"

            let address : string ;
            let result : string;
            result = " "
            
            function defanging(address:string) : string {
            for(let i=0; i<address.length; i++){
              if (address[i] == '.'){
                 result = result + '[.]';
              }
              else {
                result = result + address[i];
              }
              
            }
            return result;
        }
            console.log(defanging('1.1.1.1'))

  
  // 1108. Defanging an IP Address //
  
  // 2942. Find Words Containing Character //


function findword(words: string[], x: string): number[] {
    let result : number[] = []
 for ( let i : number = 0 ; i < words.length; i++ ){
     if(words[i].includes(x)){
       result.push(i)
     }
 }
 return result
};

console.log(findword(['abc','bcd','aaaa','cbc'],'a'))

  // 2942. Find Words Containing Character //

  