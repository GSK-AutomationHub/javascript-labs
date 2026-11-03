fruits = ['mango', 'apple', 'kiwi', 'berry']

console.log(fruits.sort())
console.log(fruits.reverse())

numbers = [3,6,9,12,15,18,12,15,21,12]

numbers.sort((a,b) => a-b)
console.log(numbers)

numbers.sort((a,b) => b-a)
console.log(numbers)