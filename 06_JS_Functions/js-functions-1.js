// Normal
function add(num1, num2){
    return num1 + num2;
}

console.log(add(3, 4));

// Fn Expression
let addition = function(num1, num2){
    return num1 + num2;
}
console.log(addition(5, 10));

// Arrow
let addNumber = (num1, num2) => num1 + num2;
console.log(addNumber(3,6));

// IIFE
(function(){
    console.log(5 + 7);
})();

(() =>{
    console.log('This is immediately invoke function');
})();

