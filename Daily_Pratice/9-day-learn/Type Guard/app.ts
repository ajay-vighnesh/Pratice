type MyType = string | number;


function exampleFunction(value: MyType) {
    
    if (typeof value === "string") {
        
        console.log("Value is a string:", value.toUpperCase());
    } else {
        
        console.log("Value is a number:", value.toFixed(2));
    }
}


exampleFunction("hello"); 
exampleFunction(3.14159); 

