// let hoisting - js engine keep variable in TDZ till it get initialise

console.log(x) // reference error
let x;


// let hoisting - js engine keep function in TDZ till it get defined

console.log(testVar()) //  undefined - function called before declaration

function testVar(){}
