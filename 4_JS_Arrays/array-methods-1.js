
let arr = [1,2,3,4,5];

// length, push, pop, unshift, shift
console.log(arr.length)

arr.push(6);
console.log(arr);

arr.pop()
console.log(arr);

arr.unshift(0);
console.log(arr);

arr.shift();
console.log(arr);

console.log("------------------------------------")

//concat, splice, slice, indexOf, includes, forEach
arr = arr.concat([7,8,9,10]);
console.log(arr);

arr.splice(3,0,11,12,5);
console.log(arr);

arr.splice(3,2);
console.log(arr);

console.log(arr.slice(3,7));

console.log(arr.indexOf(5))
console.log(arr.indexOf(5, arr.indexOf(5)+1));

console.log(arr.includes(5));
console.log(arr.includes(6));

arr.forEach((e) => console.log(e));
arr.forEach((e) => console.log(e**2));