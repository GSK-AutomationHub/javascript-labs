//constructor Fn [mentioning 'return' is imp]
let divisionResult = new Function("num1", "num2","return num1 / num2;");
console.log(divisionResult(25, 5));

//generator Fn [mentioning function* is imp, itr.next().value]
function* generateCounter(num){
    for(i=1; i<num; i++){
        yield i;
    }
}

let itr = generateCounter(10);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

//Recursive Fn
function factorial1(n){
    if (n === 0 || n === 1){
        return 1;
    }else{
        return n * factorial1(n-1);
    }
}
console.log(factorial1(5))

function factorial2(n){
   return (n === 0 || n === 1) ? 1 : n * factorial2(n-1);
}
console.log(factorial2(5))

let factorial3 = n => (n === 0 || n === 1) ? 1 : n * factorial3(n-1);
console.log(factorial3(5))

//9. Higher-Order Function:

function operate(funcName, a, b){
    return funcName(a, b);
}

let multiplyNumbers = (a, b) => a * b;

console.log(operate(multiplyNumbers, 5 , 3))