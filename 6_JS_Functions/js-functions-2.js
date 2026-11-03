// function constructor
function Car (color, make, brand){
    this.color = color,
    this.make = make,
    this.brand = brand
    this.greet = function() {
    console.log(`Hello, car brand is ${this.brand}`);
    }
}

let c1 = new Car('white', 'super', 'bmw');
console.log(c1.brand, c1.color, c1.make);
console.log(c1.greet());

// Syntax: new Function(arg1, arg2, ..., functionBody)
const add = new Function("a", "b", "return a + b;");
console.log(add(5, 10)); // Output: 50

// function generator
function* numberGenerator(num){
    for(let i=1; i<num; i++){
        yield i;
    }
}

let itr = numberGenerator(10)
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)
console.log(itr.next().value)

// Ananymous Function
const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map((e) =>{
    return e * e;
});
console.log(squareNumbers);

//Recursive Function
function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }
}

console.log(factorial(4));

function factorial1(n){
return (n === 0 || n === 1) ? 1 : n * factorial1(n-1)
}

console.log(factorial1(5));

const factorial2 = n => (n === 0 || n === 1) ? 1 : n * factorial2(n-1)

//9. Higher-Order Function:
function additon(a,b){
    return a+b;
}

function multiplication(a,b){
    return a*b;
}

function operate(funcName, a, b){
    return funcName(a,b);
}

const s = operate(multiplication, 4, 5);
console.log(s);