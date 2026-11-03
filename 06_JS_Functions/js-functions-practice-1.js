//Normal Fn
function addNumbers(num1, num2){
    return num1 + num2;
}

let addNumberResult = addNumbers(5, 7);
console.log(addNumberResult);

//Fn Expression
let addition = function(num1, num2){
    return num1 + num2;
}

console.log(addition(5, 7));

//Arrow Fn
let multiplicationResult = (num1, num2) => num1 * num2;
console.log(multiplicationResult(5, 3));

//IIFE
(function(){
    console.log("This is IIFE")
})();

(()=>{
    console.log("This is IIFE");
})();