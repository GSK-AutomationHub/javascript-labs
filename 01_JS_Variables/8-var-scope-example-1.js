/*
scope - global, function, local
can re-assigned / re-initialise? -> Yes
can re-declared? -> Yes
*/

console.log("----------- Re-declration ------------------")

var msg = 'hello';
console.log(msg); // hello

function greet(){
    var msg = 'hi'
    console.log(msg) // hi

    if(true){
        var msg = 'welcome';
         console.log(msg); // welcome --> with re-assignment value get override
    }

    console.log(msg); // welcome 
}

greet();
console.log(msg); // hello


console.log("----------- Re-assignment ------------------")

var newMsg = 'hello';
console.log(msg); // hello

function greet(){
    newMsg = 'hi'
    console.log(newMsg); // hi 

     if(true){
        newMsg = 'welcome';
        console.log(newMsg); // welcome 
    }
    console.log(newMsg); // welcome

}

greet();
console.log(newMsg); // welcome