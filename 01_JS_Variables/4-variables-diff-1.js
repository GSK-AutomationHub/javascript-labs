/* JS has 3 types of variables - var, let, constant
 
 var:- old way of using js vaiables , with var the variables .. 
       - can be redeclared  &
       - can be reinitialized
       - Limitation: once re-initialized, original value get override and cannot reuse in prog
 
 let:- new way of using js vaiables as per ES6, with let the variables ..
       - cannot be redeclared but
       - can be reinitialize
       - has a block scope
 
 const:- only used to for constants, 
       - cannot be redeclared
       - cannot br reinitialized
       - must need to initialize during declartion

*/ 

//varExample()
function varExample(){
      var x = 1
      console.log(x) //1

      if(true){
      x = 2 // x will get overriden by 2 as var has global scope
      console.log(x) //2
      x =3
      }
      console.log(x) //3
}

//letExample()
function letExample2(){
      let x = 1
      console.log(x) //1

      if(true){
      let x = 2 // x will not get overriden by 2 as let has block scope
      console.log(x) //2
      x =3
      }
      console.log(x) //1
}

//constExample()
function constExample(){
      const x = 1
      console.log(x) //1

      if(true){
      x = 2 // error
      console.log(x) //2
      }
      console.log(x) 
}

constExample()