
/* Test your JavaScript Array knowledge
Create an array called expenses that contains at least 5 different expense amounts.
Calculate the total expenses by summing all the elements of the array.
Find the highest and lowest individual expenses within the array.*/

let expenses = [12, 24, 36, 50, 60];

let totalExpense = expenses.reduce((sum,expense)=>sum+expense,0);
console.log(`The total expense is ${totalExpense}`);

let sortedExpense = expenses.sort((a,b) => a-b);
console.log(sortedExpense);

let maxExpense = sortedExpense.pop();
let minExpense = sortedExpense.shift();

console.log(`The maximum expense is ${maxExpense}`);
console.log(`The minimum expense is ${minExpense}`);