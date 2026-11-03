/*
Array & 10 Important Arrays Functions in JavaScript
1. push  2. pop  3. shift  4. unshift  5. splice
6. slice  7. concat  8. indexOf  9. includes  10. forEach
*/


fruits = ['mango', 'apple', 'kiwi', 'berry', 'guava', 'pomogranet']
console.log(fruits)

fruits.push('cherry') // adds element at last index 
console.log(fruits)

fruits.pop() // removes element at last index
console.log(fruits)

fruits.unshift('kiwi') // adds element at first index 
console.log(fruits)

fruits.shift() // removes element at first index 
console.log(fruits)

fruits.splice(1, 2, 'banana', 'orange') // removes 2 elements from index 1 and 2 & adds banana and orange
console.log(fruits)

numbers = [3,6,9,12,15,18,12,15,21,12]

x = numbers.slice(3,6) // returns elements from index 3 to 5
console.log(x)

num = [1,2,3], car = ['audi', 'bmw', 'mercedes']
y = num.concat(car) // combines two arrays
console.log(y)

console.log(numbers.indexOf(12)) // returns first index of 12
console.log(numbers.lastIndexOf(12)) // returns last index of 12

console.log(fruits.includes('orange')) // returns true if orange is present in fruits array


let numArray = [3,6,9,12,15,18,12,15,21,12]

sum = 0
for (let i=0; i<numArray.length; i++) {
    sum += numArray[i]
}
console.log(sum)

var total = numArray.reduce((sum,num) => sum+num,0) // returns sum of all elements in numArray
console.log(total)

let evenNumbers = numArray.filter((num) => num % 2==0)
console.log(evenNumbers)

let doubledNumbers = numArray.map((num) => num*2) // returns new array with all elements multiplied by 2
console.log(doubledNumbers)

let firstGreater = numArray.find((num) => num > 10) // returns first element greater than 10
console.log(firstGreater)

fruits.forEach(fruit => {
    console.log(fruit);
});

fruits.forEach(fruit => console.log(fruit));

fruits.forEach((fruit, index) => {
    console.log(`Index: ${index}, Fruit: ${fruit}`);
});

for(fruit in fruits) {
    console.log(fruits[fruit])
}

for(fruit of fruits) {
    console.log(fruit)
}
