# JavaScript Functions: TypeScript & Python Equivalents

Python conversions are included only where a legitimate, idiomatic equivalent exists. Otherwise they are skipped.

---

## Part 1: Normal Fn, Fn Expression, Arrow Fn, IIFE

### Original JavaScript

```javascript
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
```

### TypeScript

```typescript
// Normal Fn
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}

let addNumberResult: number = addNumbers(5, 7);
console.log(addNumberResult);

// Fn Expression
let addition = function (num1: number, num2: number): number {
    return num1 + num2;
};

console.log(addition(5, 7));

// Arrow Fn
let multiplicationResult = (num1: number, num2: number): number => num1 * num2;
console.log(multiplicationResult(5, 3));

// IIFE
(function (): void {
    console.log("This is IIFE");
})();

((): void => {
    console.log("This is IIFE");
})();
```

### Python

```python
# Normal Fn
def add_numbers(num1, num2):
    return num1 + num2

add_number_result = add_numbers(5, 7)
print(add_number_result)

# Fn Expression -> closest legit equivalent is a lambda assigned to a name
addition = lambda num1, num2: num1 + num2
print(addition(5, 7))

# Arrow Fn -> also a lambda (Python has only one lambda syntax)
multiplication_result = lambda num1, num2: num1 * num2
print(multiplication_result(5, 3))

# IIFE -> skipped
```

### Notes on the Python side

- **Normal Fn**: direct equivalent via `def`.
- **Fn Expression and Arrow Fn**: Python's `lambda` covers both, since it only allows a single expression. Both map to the same construct, so they're shown as two lambdas. (Strictly, PEP 8 prefers `def` over assigning a lambda to a name, but it's a valid equivalent here.)
- **IIFE**: skipped. Python has no idiomatic IIFE pattern. You can technically write `(lambda: print("This is IIFE"))()`, but it's a forced translation that nobody writes in practice, and Python's function scoping makes the pattern unnecessary. Just call the code directly or define and call a normal function.

---

## Part 2: Constructor Fn, Generator Fn, Recursive Fn, Higher-Order Fn

### Original JavaScript

```javascript
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
```

### TypeScript

```typescript
// Constructor Fn [mentioning 'return' is imp]
let divisionResult = new Function("num1", "num2", "return num1 / num2;");
console.log(divisionResult(25, 5));

// Generator Fn [mentioning function* is imp, itr.next().value]
function* generateCounter(num: number): Generator<number> {
    for (let i = 1; i < num; i++) {
        yield i;
    }
}

let itr = generateCounter(10);
console.log(itr.next().value);
console.log(itr.next().value);
console.log(itr.next().value);

// Recursive Fn
function factorial1(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial1(n - 1);
    }
}
console.log(factorial1(5));

function factorial2(n: number): number {
    return (n === 0 || n === 1) ? 1 : n * factorial2(n - 1);
}
console.log(factorial2(5));

let factorial3 = (n: number): number => (n === 0 || n === 1) ? 1 : n * factorial3(n - 1);
console.log(factorial3(5));

// 9. Higher-Order Function
function operate(funcName: (a: number, b: number) => number, a: number, b: number): number {
    return funcName(a, b);
}

let multiplyNumbers = (a: number, b: number): number => a * b;

console.log(operate(multiplyNumbers, 5, 3));
```

### Notes on the TS side

- The original generator used `i` without declaring it (an implicit global). I added `let i`, which is required in TS strict mode.
- `new Function(...)` returns the generic `Function` type, so TS allows the call but doesn't type-check the arguments or return value. It works, but it's untyped.

### Python

```python
# Constructor Fn -> skipped

# Generator Fn
def generate_counter(num):
    for i in range(1, num):
        yield i

itr = generate_counter(10)
print(next(itr))
print(next(itr))
print(next(itr))

# Recursive Fn
def factorial1(n):
    if n == 0 or n == 1:
        return 1
    else:
        return n * factorial1(n - 1)

print(factorial1(5))

def factorial2(n):
    return 1 if n == 0 or n == 1 else n * factorial2(n - 1)

print(factorial2(5))

factorial3 = lambda n: 1 if n == 0 or n == 1 else n * factorial3(n - 1)
print(factorial3(5))

# 9. Higher-Order Function
def operate(func_name, a, b):
    return func_name(a, b)

multiply_numbers = lambda a, b: a * b

print(operate(multiply_numbers, 5, 3))
```

### Notes on the Python side

- **Constructor Fn**: skipped. Python has no `Function` constructor. The nearest thing is building code strings and calling `exec()` or `eval()`, which is a forced and unsafe translation, not an idiomatic equivalent.
- **Generator Fn**: a legitimate match. `yield` makes `def` a generator, and `next(itr)` replaces `itr.next().value`. Python has no `function*` syntax and no `.value` wrapper, since `next()` returns the yielded value directly. `range(1, num)` mirrors the loop (1 to num-1).
- **Recursive Fn**: direct equivalents. The ternary becomes `x if cond else y`, and `===` becomes `==`. `factorial3` as a lambda works, but `def` is preferred by PEP 8.
- **Higher-Order Function**: a direct equivalent, since functions are first-class objects in Python too.

---

## Quick Summary

| JS Concept | TypeScript | Python |
|---|---|---|
| Normal Fn | Yes | Yes (`def`) |
| Fn Expression | Yes | Yes (`lambda`) |
| Arrow Fn | Yes | Yes (`lambda`) |
| IIFE | Yes | Skipped |
| Constructor Fn | Yes (untyped) | Skipped |
| Generator Fn | Yes | Yes (`yield` + `next()`) |
| Recursive Fn | Yes | Yes |
| Higher-Order Fn | Yes | Yes |
