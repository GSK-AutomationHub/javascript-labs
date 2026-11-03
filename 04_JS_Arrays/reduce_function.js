// reduce - return one count post applying function on array items

// find max number of array

number = [10,12,15,21,25,30,42]

let maxNum = number.reduce((max,num) =>{
    if (num > max) {
        return num
    }
    else{
        return max
    }
}, number[0])

console.log("maximum number from array is",maxNum )

console.log("-----------------------------------------------" )

// find min number of array

let minNum = number.reduce((min,num) =>{
    if (num < min) {
        return num
    }
    else{
        return min
    }
}, number[0])

console.log("minimum number from array is",minNum )

console.log("-----------------------------------------------" )

// find total of cart items in shopping cart app

cartItems = [
    {item:"Shirt", price: 300},
    {item:"pant", price: 500},
    {item:"belt", price: 100},
    {item:"shoes", price: 700},
    {item:"wallet", price: 150}
]

let totalPrice = cartItems.reduce((cartTotal, cartItem) => cartTotal + cartItem.price, 0)
console.log(totalPrice)