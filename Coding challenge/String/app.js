// 2011. Final Value of Variable After Performing Operations start //
var operators;
operators = ['--x', 'x++', 'x++'];
var x1 = 1;
for (var i = 0; i < operators.length; i++) {
    if (operators[i] == '--x' || operators[i] == 'x--') {
        x1 = x1 - 1;
    }
    else {
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
var address;
// address = "1.1.1.1" ;
var result;
result = " ";
// address = address.replace(/\./g, "[.]")
function defanging(address) {
    // console.log(address);
    for (var i = 0; i < address.length; i++) {
        if (address[i] == '.') {
            result = result + '[.]';
        }
        else {
            result = result + address[i];
        }
    }
    return result;
}
console.log(defanging('1.1.1.1'));
// 1108. Defanging an IP Address //
// 2942. Find Words Containing Character //
//   function words1 (x : string ) {
//     let words : string[] ;
//     words = ["leet","code"];
//     let x : string ;
//     x = 'e'
//     for (let i = 0; i<words.length ; i++){
//         if(x == words[""]){
// console.log('haaaii')
//         }
//     }
//   }
function findword(words, x) {
    var result = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            result.push(i);
        }
    }
    return result;
}
;
console.log(findword(['s', 'bcd', '1', 'cbc'], 'a'));
// 2942. Find Words Containing Character //
var gfg = new Array(3);
for (var i = 0; i < gfg.length; i++) {
    gfg[i] = [];
}
var h = 0;
var s = "GeeksforGeeks";
// Loop to initialize 2D array elements.
for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
        gfg[i][j] = s[h++];
    }
}
console.log(gfg);
