
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const t = Math.random();
        if (t > 0.3) {
            resolve(t);
        }
        else {
            reject("some error");
        }
    }, 1000);
});

myPromise
    .then(result => {
        console.log("promise fulfilled ", result);
    })
    .catch(error => {
        console.log('promise rejected ' + error);
    })


