/*
Array & 10 Important Arrays Functions in JavaScript
1. push  2. pop  3. shift  4. unshift  5. splice
6. slice  7. concat  8. indexOf  9. includes  10. forEach
*/


// push
color = ["green","yellow","blue","red"]
console.log(color)
color.push("purple", "white", "burgundy")
console.log(color)


//pop
poped_color = color.pop()
console.log(poped_color)
console.log(color)


//shift
shifted_color = color.shift()
console.log(shifted_color)
console.log(color)


//unshift
color.unshift("green","burgundy")
console.log(color)


//splice
fruits = ["manago","banana","pomogranet","kiwi", "berry"]
console.log(fruits)
fruits.splice(1,2,"chiku","guava")
console.log(fruits)


// slice  
numbers = [3,6,9,12,15,18,12,15,21,12]
x = numbers.slice(3,6)
console.log(x)


// concat 
mixed = numbers.concat(fruits)
console.log(mixed)


// indexOf
num = 12
console.log(numbers.indexOf(num))
console.log(numbers.indexOf(num,numbers.indexOf(num)+1))


// includes  
console.log(fruits)
console.log(fruits.includes("cherry"))


//forEach
fruits.forEach((fruit) =>{
    console.log(fruit)
})

numbers.forEach((num) =>{
    console.log(num*num)
})

// Array to String
let fruits = ['mango', 'apple', 'guava', 'orange']

fruits.toString() // 'mango', 'apple', 'guava', 'orange'

fruits.join('-') // 'mango' - 'apple' - 'guava' - 'orange'

fruitString = fruits.toString()
console.log(fruitString)

fruitArray = fruitString.split(',')
console.log(fruitArray)
