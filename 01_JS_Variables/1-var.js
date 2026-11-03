
//var - can be redeclared , can be reinitialized

var msg = "hello world"
console.log(msg)

var msg = "hello universe" // can be redeclared
console.log(msg)

msg = "hello india" // can be reinitialized
console.log(msg)

//var - Limitation: once re-initialized, original value get override and cannot reuse in prog

var temp = 5
var new_msg = "test var limitation"
console.log(new_msg)

if (temp > 3) {
    var new_msg = "overriding the var data" // Limitation: original value get override
    console.log(new_msg)
}

console.log(new_msg) // always print overriden value, original value get lost