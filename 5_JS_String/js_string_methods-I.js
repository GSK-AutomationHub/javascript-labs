
/*
String Methods - length, specific index, indexOf, Repeated word count with indexOf, 
slice, split, replace, trim, concatenation, type casting

*/

let day = 'wednesday';

// length of string
console.log(day.length); // Outputs: 9


//getting specific character, index value
console.log(day.charAt(3)); // Outputs: n
console.log(day[2]); // Outputs: d

//indexOf method
newQuote = 'Wednesday is fun day'

let dayIndex = newQuote.indexOf('day')
console.log(dayIndex); // Outputs: 9

//Repeated word count with indexOf
let count = 0;
let index = newQuote.indexOf('day');
while (index !== -1) {
    count++;
    index = newQuote.indexOf('day', index + 1);
}
console.log(count); // Outputs: 2

// slice method
console.log(day.slice(0,5)); // Outputs: wedne


//split method
let splitDay = day.split("s");
console.log(splitDay); // Outputs: [ 'wedne', 'day' ]
console.log(splitDay[0]); // Outputs: wedne

//replace method
let replacedDay = day.replace("day", "night");
console.log(replacedDay); // Outputs: wednesnight

//trim method
let newDay = 'wednesday   ';
let newSplitDay = newDay.split("s");
console.log(newSplitDay[1]); // Outputs: day
console.log(newSplitDay[1], newSplitDay[1].length); // Outputs: day
console.log(newSplitDay[1].trim().length); // Outputs: 3

//Concatenation 
let str1 = 'Wednesday is fun day';
let str2 = ' and it is a good day';
let concatenatedString = str1.concat(str2);
console.log(concatenatedString); // Outputs: Wednesday is fun day and it is a good day

// type casting to integer
let num1 = 23;
let num2 = 27;
let diff = parseInt(num2) - parseInt(num1);
console.log(diff, typeof(diff)); // Outputs: 4

// type casting to string 
let diffString = diff.toString();
console.log(diffString, typeof(diffString)); // Outputs: 4
