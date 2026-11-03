
//array/object ---> variables

//array:
const numbers = [1, 2, 3, 4, 5];
const [a, b, c, d] = numbers;
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const lang = ["JavaScript", "Java", "Ruby", "Python", "GO"];
const [p, q, ...testLang] = lang;
console.log(p);
console.log(q);
console.log(testLang);
