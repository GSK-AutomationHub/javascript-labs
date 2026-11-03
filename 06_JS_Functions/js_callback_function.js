// Callback function: 
// Function that passed as an argument to other function
// It is executed after some operation being completed. 
// These are often used for asynchronous operations


// Calling function
function fetchData(callback) {

    setTimeout(()=>{

        console.log("data fetched!");
        const data = "sample data"
        callback(data)

    }, 2000);

    //return data
}

// callback function
function processData(data){

    console.log("Processing:", data);

}

// callback function
function modifyData(data){

    console.log("Modifying:", data);

}


// Call Back Call
fetchData(processData);
fetchData(modifyData);