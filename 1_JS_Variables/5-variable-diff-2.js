// var - allow to override fn scope variable in block scope
// let - does not allow to override fn scope variable in block scope

function varTest(){
    var x = 11 //function scope
    console.log(x);//11

    if(true){
        var x = 12 // local scope ---> var overwrites fn scope variable
        var y = 13
        console.log(x, y); //12, 13
    }

    console.log(x); // 12 ---> var overwrites fn scope variable
    console.log(y); // ll able to access local scope varibale in function scope
}

varTest();

console.log("-------------------------------------------")

function letTest(){
    let x = 11 //function scope
    console.log(x);//11

    if(true){
        let x = 12 // local scope ---> let will not overwrite fn scope variable
        let y = 13
        console.log(x, y); //12, 13
    }

    console.log(x); // 11 ---> let will not overwrite fn scope variable
    console.log(y); // will not access local scope varibale in function scope
    // reference error 
}

letTest();

