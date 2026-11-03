/*
async- await concept:
1. async function is a function which is declared with async keyword and it always returns a promise.
2. await keyword is used to wait for a promise to resolve or reject before moving to the next line of code.
3. await can only be used inside an async function.
4. async function can have multiple await statements.
5. async function can or can not have await statements.
6. async function can have try-catch block to handle errors.
*/

//async function without await
async function f1() {
    console.log("this is async function without await step");
    return 42; //return a promise(resolved) on top of 42
}

f1()
.then(result=>{
    console.log(result);
});

//async function without await but with error:
async function f2() {
    console.log('this is an async function with error');
    throw new Error("this is my error"); //return a promise(rejected)
}

f2().catch(error =>{
    console.log(`the error message ${error}`);
})

//async function with a resolved/rejecte promise:
function getInfo() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.random();
        setTimeout(() => {
            if (randomNumber < 0.5) {
                resolve(randomNumber);
            } else {
                reject(new Error("wrong value error"));
            }
        }, 2000);
    })
}

//create async function which is calling getinfo()
async function getNumberInfo() {
    try {
        const result = await getInfo(); //async step
        console.log("Result: ", result);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

//call getNumberInfo():
getNumberInfo();

async function f3() {

    await f2();
}