# Loops: JavaScript → TypeScript & Python

## Notes

- The first loop's comment says "1 to 10", but `i=0` prints 0 to 10. The original behavior (0 to 10) is kept in both conversions.
- Python has no `do-while`, so it is emulated with `while True` plus a `break`.
- Python has no `for(;;)` loop, so `range()` is used.
- `for...in` on an array gives indexes in JS, so Python uses `enumerate()`.

---

## Original JavaScript

```javascript
//for loop:-> 1 to 10:
for(let i=0; i<=10; i++){
    console.log(i);//1 2 3 4 ....10
}

console.log("------");

//for...of loop:
const array = [1,2,3,4,5];
for(const e of array){
    console.log(e);
}
//
console.log("------");
for( let i=0; i<array.length; i++){
    console.log(array[i]);
}
console.log("------");

//while: 1 to 10:
let p = 1;
while(p<=10){
    console.log(p);
    p++;
}
console.log("------");

let l = 2;
while(l<=100){
    console.log(l);
    l = l+2;
}
console.log("------");
//do-while:
let h = 1;
do{
    console.log(h);
    h++;
}
while(h <= 10);


//break:
//1 to 100: print the hi when you see the multiplication of 5 and break:
let num = 5;
while(num <= 100){
    console.log(num);
        if(num % 5 == 0){ 
            console.log("hi -- bye");
            break;
        }
       num++; 
}

console.log("-----------")
//
const browser = ["chrome", "firefox", "edge", "IE"];
for( const e of browser){
        if(e == "edge"){
            console.log("launch edge...");
            break;
        }
}
console.log("-----------")

//for...in loop on object:
const user = {
    name:"John Doe" ,
    age :  30,
    city :"New York City ",
}
for(const key in user){
    console.log(key + " : " + user[key]);//user[name]
}

//
console.log("-----------")
const br = ["chrome", "firefox", "edge", "IE"];
for(const ele in br){
    console.log(ele + ":" + br[ele]);
}
```

---

## TypeScript

```typescript
// for loop: 0 to 10
for (let i: number = 0; i <= 10; i++) {
  console.log(i);
}

console.log("------");

// for...of loop
const array: number[] = [1, 2, 3, 4, 5];
for (const e of array) {
  console.log(e);
}

console.log("------");
for (let i: number = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("------");

// while: 1 to 10
let p: number = 1;
while (p <= 10) {
  console.log(p);
  p++;
}

console.log("------");

let l: number = 2;
while (l <= 100) {
  console.log(l);
  l = l + 2;
}

console.log("------");

// do-while
let h: number = 1;
do {
  console.log(h);
  h++;
} while (h <= 10);

// break: stop at the first multiple of 5
let num: number = 5;
while (num <= 100) {
  console.log(num);
  if (num % 5 === 0) {
    console.log("hi -- bye");
    break;
  }
  num++;
}

console.log("-----------");

const browser: string[] = ["chrome", "firefox", "edge", "IE"];
for (const e of browser) {
  if (e === "edge") {
    console.log("launch edge...");
    break;
  }
}

console.log("-----------");

// for...in on an object
interface User {
  name: string;
  age: number;
  city: string;
}

const user: User = {
  name: "John Doe",
  age: 30,
  city: "New York City ",
};

for (const key in user) {
  console.log(key + " : " + user[key as keyof User]);
}

console.log("-----------");

// for...in on an array (keys are string indexes)
const br: string[] = ["chrome", "firefox", "edge", "IE"];
for (const ele in br) {
  console.log(ele + ":" + br[Number(ele)]);
}
```

---

## Python

```python
# for loop: 0 to 10
for i in range(0, 11):
    print(i)

print("------")

# for...of loop
array = [1, 2, 3, 4, 5]
for e in array:
    print(e)

print("------")
for i in range(len(array)):
    print(array[i])

print("------")

# while: 1 to 10
p = 1
while p <= 10:
    print(p)
    p += 1

print("------")

l = 2
while l <= 100:
    print(l)
    l = l + 2

print("------")

# do-while (emulated)
h = 1
while True:
    print(h)
    h += 1
    if not (h <= 10):
        break

# break: stop at the first multiple of 5
num = 5
while num <= 100:
    print(num)
    if num % 5 == 0:
        print("hi -- bye")
        break
    num += 1

print("-----------")

browser = ["chrome", "firefox", "edge", "IE"]
for e in browser:
    if e == "edge":
        print("launch edge...")
        break

print("-----------")

# for...in on an object -> iterate over dict keys
user = {
    "name": "John Doe",
    "age": 30,
    "city": "New York City ",
}

for key in user:
    print(key + " : " + str(user[key]))  # str() because age is an int

print("-----------")

# for...in on an array -> index + value
br = ["chrome", "firefox", "edge", "IE"]
for index, ele in enumerate(br):
    print(str(index) + ":" + ele)
```

> More Pythonic version of the object loop:
> `for key, value in user.items(): print(f"{key} : {value}")`
