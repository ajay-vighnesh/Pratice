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

//   You are given a 0-indexed array of strings words and a character x.

// Return an array of indices representing the words that contain the character x.

// Note that the returned array may be in any order.

 

// Example 1:

// Input: words = ["leet","code"], x = "e"
// Output: [0,1]
// Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.


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


// 1678. Goal Parser Interpretation //

// You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

// Given the string command, return the Goal Parser's interpretation of command.


// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

// let a = "G()(al)";
let r1 : string = "";

function wordinter(a:string) : string{

  for (let i=0; i<a.length; i++){
    if (a[i] == 'G'){
      r1 = r1 + 'G'
    }
  else if ( a[i] == '(' && a[i+1] == ')') {
    r1 = r1 + 'o'
  }
  else if (a[i] == '(' && a[i+1] =='a' && a[i+2] =='l' && a[i+3] ==')' ){
    r1 = r1 + 'al'
  }
}
return r1 
}
console.log(wordinter("(al)G(al)()()G"));
// 1678. Goal Parser Interpretation //


// 2114. Maximum Number of Words Found in Sentences //

// A sentence is a list of words that are separated by a single space with no leading or trailing spaces.

// You are given an array of strings sentences, where each sentences[i] represents a single sentence.

// Return the maximum number of words that appear in a single sentence.

// Example 1:

// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.


function mostWordsFound(sentences:string[]) : number  {
 //let s : string[] = [];
 let y : number ;
 let z : number = 0;
  for (let i = 0 ; i<sentences.length ; i++){
      y = sentences[i] .split(" ").length;
      console.log('y:-->',y)
      z= Math.max(z,y)
      
  }
return z ; 
// console.log(z)
}
console.log(mostWordsFound(["alice and bob love leetcode", "i think so too asc asc asc", "this is great thank much"]))

// 2114. Maximum Number of Words Found in Sentences //



//  //

let baaa: string ;
baaa = "asjnsc"
let aab : string ;
aab = baaa.toUpperCase();
console.log('aab:->',aab);