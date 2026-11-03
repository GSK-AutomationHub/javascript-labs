/*
scope - block
can re-assigned / re-initialise? -> Yes
can re-declared? -> No
*/

console.log("----------- Re-declration ------------------")

let msg = 'hello';
console.log(msg); // hello

function greet(){
    let msg = 'hi'
    console.log(msg) // hi

    if(true){
        let msg = 'welcome';
         console.log(msg); // welcome
    }

    console.log(msg); // hi
}

greet();
console.log(msg); // hello


console.log("----------- Re-assignment ------------------")

let newMsg = 'hello';
console.log(newMsg); // hello

function greetAgain(){
    newMsg = 'hi';
    console.log(newMsg); // hi --> with re-assignment value get override

     if(true){
        newMsg = 'welcome';
        console.log(newMsg); // welcome  --> with re-assignment value get override
    }
    console.log(newMsg); // welcome

}

greetAgain();
console.log(newMsg); // welcome