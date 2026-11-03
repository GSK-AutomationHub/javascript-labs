
/* Sync vs Async
Synchronous code is executed line by line and each, linear fashion, in serial way
line waits for the previous line to finish execution before executing. 
So user experience is blocked until the previous line is executed.

Asynchronous code is executed simultaneously in parallel way, 
meaning that it does not wait for the previous line to finish execution before executing. 
So user experience is not blocked and can continue to interact with the application while the previous line is still executing.
In JS, async code is handled using callbacks, promises and async/await.

*/

function fetchCustomerOrderSyncWay(customerId, orderId){
    console.log('start function execution');
    console.log(`load customer ${customerId} profile`);
    console.log(`fetch customer ${customerId} order data from db`);
    console.log(`display order ${orderId} details`);
    console.log('end function execution');
}


function fetchCustomerOrderAsyncWay(customerId, orderId){
    console.log('start function execution');
    console.log(`load customer ${customerId} profile`);
    setTimeout(()=>{
       console.log(`fetch customer ${customerId} order data from db`);
    },1000) 
    console.log(`display order ${orderId} details`);
    console.log('end function execution');
}

fetchCustomerOrderSyncWay('cust1234', 'order1234');
console.log('---------------------');
fetchCustomerOrderAsyncWay('cust1234', 'order1234');