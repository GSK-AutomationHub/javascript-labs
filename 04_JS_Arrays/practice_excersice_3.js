/*
Apply transformations and calculations to array elements, and filter elements based on a condition
You have an array called productPrices with various product prices.
Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
Use the filter method to create a new array called affordableProducts containing only products priced below $50
Calculate the total cost of all items in the affordableProducts array using the reduce method.
*/

let productPrices = [30, 40, 50, 60, 70];
console.log(`The original prices are ${productPrices}`);

let discountedPrices = productPrices.map((price)=> price - (price * 0.1));
console.log(`The discounted prices are ${discountedPrices}`);

let affordableProducts = discountedPrices.filter((price)=> price < 50);
console.log(`The affordable products are ${affordableProducts}`);

let totalCost = affordableProducts.reduce((total, price) => total + price, 0);
console.log(`The total cost of affordable products is ${totalCost}`);