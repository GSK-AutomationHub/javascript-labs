/*
scope - global, function, local
can re-assigned / re-initialise? -> Yes
can re-declared? -> Yes
*/

console.log("---------- Behavior with Re-declaration -------------");

var x = 10; //scope -> global
console.log(x); //10

function testVar1(){
    var x = 11 //function scope
    console.log(x); // 11

    if(true){
        var x = 12 // local scope
        console.log(x); //12
    }

    console.log(x); // 12
}

testVar1();
console.log(x); // 10

console.log("------------ Issue with Re-assignment --------------");

var x = 10; //scope -> global
console.log(x); //10

function testVar2(){
    x = 11 //function scope
    console.log(x); // 11 

    if(true){
        x = 12 // local scope
        console.log(x); //12
    }
    console.log(x);//12
}

testVar2();
console.log(x); //12