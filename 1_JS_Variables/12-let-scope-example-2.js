/*
scope - block
can re-assigned / re-initialise? -> Yes
can re-declared? -> No
*/

console.log("---------- Behavior with Re-declaration -------------");

let x = 10; //scope -> global
console.log(x); //10

function testVar1(){
    let x = 11 //function scope
    console.log(x); // 11

    if(true){
        let x = 12 // local scope
        console.log(x); //12
    }

    console.log(x); // 11 ---> let will not overwrite fn scope variable
}

testVar1();
console.log(x); // 10

console.log("------------ Issue with Re-assignment --------------");

let y = 10; //scope -> global
console.log(y); //10

function testVar2(){
    y = 11 //function scope
    console.log(y); // 11 

    if(true){
        y= 12 // local scope
        console.log(y); //12
    }
    console.log(y);//12
}

testVar2();
console.log(y); //12