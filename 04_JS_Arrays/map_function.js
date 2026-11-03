//map - applies inbuild function on each item of array & returns new array

test_numbers = [2,4,6,8,10,12]

function doubleNum(num){
    return 2*num
}

let doubled_numbers = test_numbers.map(doubleNum)

console.log(doubled_numbers)

//map - applies inbuild function on each item of array & returns new array

let triple_numbers = test_numbers.map((e) => e*3)
console.log(triple_numbers)

