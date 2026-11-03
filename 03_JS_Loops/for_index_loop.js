

// normal for loop in JS

let i = 1
for(i; i<=12; i++){
    console.log(i)
}

console.log("--------------------------------------")

// for loop with break statement

i = 1
for(i; i<=12; i++){
    console.log(i)
    if (i == 6){
        break //break can be used for if when its in for loop
    }
}

console.log("--------------------------------------")

// for loop with continue statement

i = 1
for(i; i<=12; i++){
    if (i == 2 || i ==4){
       continue;
    }
    console.log(i)
}