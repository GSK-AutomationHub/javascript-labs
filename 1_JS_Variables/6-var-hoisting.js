// var hoisting - js engine assign 'undefined' when declaring variable with var

console.log(x) // undefined - variable called without initialisation
var x;

console.log(y) // undefined - variable called without initialisation
var y = 100;

// hoisting - js engine assign 'undefined' if function called before defining

console.log(testVar()) //  undefined - function called before declaration

function testVar(){}
