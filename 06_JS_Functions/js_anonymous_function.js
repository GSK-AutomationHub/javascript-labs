
// function with function name
function greetings(name){

    console.log(`Hello ${name}, Welcome to world of JavaScript`);

}

greetings("Rahul")


// anonymous function syntax 1

let mesaage  = function(name) {
    return `Hello ${name}, Welcome to world of JavaScript`;
}

console.log(mesaage('dinesh'))


// anonymous function syntax 2

let greetMessage  = (name) => {
    return `Hello ${name}, Welcome to world of JavaScript`;
}

console.log(greetMessage('Gopal'))

