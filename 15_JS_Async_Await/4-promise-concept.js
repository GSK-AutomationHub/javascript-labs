/*
Promise --> promise handles asyc operation effectively and organised way. 
It is in pending state when it is created. It can be resolved or rejected.
It takes 2 callbacks as parameter, resolve and reject and has 2 handlers called then and catch. 
then is called when promise is resolved and it returns a resolved promise with status.
catch is called when promise is rejected and it returns a rejected promise with error.
*/

const randomNumberPromise = new Promise((resolve, reject) => {

    //async operation:
    setTimeout(() => {
        const randomValue = Math.random();
        if (randomValue > 0.5) {
            resolve(randomValue);
        } else {
            reject(new Error("value is too small!"));
        }

    }, 2000);//delay of 2 secs
});

randomNumberPromise
    .then(result => {//handler
        console.log("promise is fulfilled with value: ", result);
    })
    .catch(error => {//handler
        console.error("promise is rejected with error: ", error);
    });