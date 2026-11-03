
// map, filter, reduce, every, some, fine, lastindexof

let arr = [
  1,  2, 3, 11, 12,
  5,  4, 5,  7,  8,
  9, 10
]

let mappedArray = arr.map((e) => e*3);
console.log(mappedArray);

let filteredArray = mappedArray.filter((e) => e % 3 === 0 && e % 5 === 0);
console.log(filteredArray);

let reducedArray = filteredArray.reduce((sum, item) => sum + item, 0);
console.log(reducedArray);

let chainingArray = arr.map((e) => e*3)
.filter((e) => e % 3 === 0 && e % 5 === 0)
.reduce((sum, item) => sum + item, 0);
console.log(chainingArray);

console.log(filteredArray.every((e)=> e % 5 === 0));
console.log(filteredArray.every((e)=> e % 2 === 0));
console.log(filteredArray.some((e)=> e % 2 === 0));
console.log(filteredArray.some((e)=> e % 7 === 0));

let gradeLoop = [
    {thershold:90, message:'Grade A - Excellent'},
    {thershold:80, message:'Grade B - Good'},
    {thershold:70, message:'Grade C - Can do Better'},
    {thershold:60, message:'Grade D - Need Coaching'},
    {thershold:50, message:'Grade E - Underperforming'},
    {thershold:40, message:'Grade F - call parents'}
]

console.log(gradeLoop.filter((e) => e.thershold % 30 === 0));
console.log(gradeLoop.reduce((sum, item) => sum + item.thershold, 0));
console.log(gradeLoop.find((e) => e.thershold === 50))
console.log(gradeLoop.sort((a,b) => a.thershold - b.thershold));
console.log(gradeLoop.sort((a,b) => b.thershold -a.thershold));

let top = [10,5,25,8,30,15]; 

let maxNumberInArray = (top.sort((num1, num2) => num2 - num1)).shift();
console.log(maxNumberInArray)
