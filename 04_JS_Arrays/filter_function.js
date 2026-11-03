// filter - run customized filter function on all ele of array for filtering

test_numbers = [1,2,3,4,5,6,7,8,9,10,11,12]

function evenNumber(num){
    return num % 2 === 0
}
console.log(test_numbers)
let even_numbers = test_numbers.filter(evenNumber)
console.log(even_numbers)

console.log("----------------------------------------------------------------")

// filter - run customized filter function on all ele of array for filtering

employees = [
    {name:"jaya", age:24, gender:"female"},
    {name:"jayesh", age:34, gender:"male"},
    {name:"rupa", age:30, gender:"female"},
    {name:"vilas", age:42, gender:"male"},
    {name:"priya", age:50, gender:"female"}
]

female_employees_above30 = employees.filter((emp) =>{
    return emp.gender === "female" && emp.age >= 30
})

console.log(female_employees_above30)