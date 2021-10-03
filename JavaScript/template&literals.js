// New feature as of (ES6)

// template literals = another way of formatting output, 
//                     can cantain placeholder for
//                     formatting and inserting
//                     strings/values/variables/etc.


//                    ` backticks
//                     $() placeholder

//                     can use multiple lines
//                     embed expression

let firstName = "Ashish";
let lastName = "Devakate";
let price = 10;
let taxRate = 0.05;
let total;

console.log(`Hello ${firstName} ${lastName}!`);

console.log(`The price is: $${price}`);
console.log(`tax rate is: $${taxRate}`);
console.log(`tax is: $${price * taxRate}`);
console.log(`total is: $${total = price + (price * taxRate)}`);
