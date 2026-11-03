// let is block scope

function testVar1(){
    let x = 100;
    console.log(x); // 100
}

testVar1(); // 100
//console.log(x); // ReferenceError: x is not defined

console.log("--------------------------------------");

 function testVar2(){
    let y = 200;
    console.log(y); // 200

    if (true){
        let z = 300;
        console.log(y); // 200
        console.log(z); // 300
    }
    //console.log(z); // 300 [inner block variable can not be access in fn]
}

testVar2(); // 200, 200, 300, 300
// console.log(y); // ReferenceError: y is not defined
// console.log(z); // ReferenceError: z is not defined