/*
Manipulate an array of strings (add, remove, sort)
Create an array named studentNames with the names of your students.
Add a new student name to the beginning of the array.
Remove the last student name from the array. Alphabetize the student names within the array.
*/

let studentNames = ['amit', 'pramod', 'amol', 'dilip', 'sagar', 'shashi','ravi'];
console.log(studentNames);

studentNames.unshift('ganesh');
studentNames.pop();
console.log(studentNames);

studentNames.sort();
console.log(studentNames);

