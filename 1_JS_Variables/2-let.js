
// let - cannot be redeclared 
let msg = "hello world"
console.log(msg)
//let msg = "hello universe"  

// let - can be reinitialize
msg = "hello india" 
console.log(msg)

//let has block scope
let temp = 5
if (temp > 3){
    let new_msg = "let has block scope"
    console.log(new_msg)
}
// console.log(new_msg) // ---> ReferenceError: new_msg is not defined