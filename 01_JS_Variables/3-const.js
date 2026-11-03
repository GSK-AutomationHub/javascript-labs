/* const:- only used to for constants, 
       - cannot be redeclared
       - cannot be reinitialized
       - must need to initialize during declartion */


// const msg ---> const must need to initialize during declartion

const msg = "hello world"
console.log(msg)

// const msg = "hello india" ---> cannot be redeclared
// msg = "hello universe" ---> cannot be reinitialized, TypeError: Assignment to constant variable.