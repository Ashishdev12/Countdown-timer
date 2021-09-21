//In JavaScript, an array is an ordered list of values. Each value is called an element specified by an index. ... First, an array can hold values of different types. For example, you can have an array that stores the number and string, and boolean values. Second, the length of an array is dynamically sized and auto-growing.

var cars = ["Mustang","corvette","jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla");//add an element
cars.pop(); // removes last element

var numberOfCars = cars.length; // returns length of array

//cars = cars.sort();// sorts an array alphabetically/number
//cars = cars.reverse();// reverse sort an array

var lastcar = cars[cars.length-1];

console.log(cars);
console.log(numberOfCars);
console.log(lastcar);
