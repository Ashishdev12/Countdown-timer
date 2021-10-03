// date object = represents a moment in time since epoch (reference point)

date = new Date(0);
date = new Date();
date = new Date(2022, 3, 27, 18, 1, 2, 3);
date = new Date("April 20, 2022 16:20:01:02");//string 

let year = date.getFullYear();
let month = date.getMonth();
let dayofweek = date.getDay();
let dayofmonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliseconds = date.getMilliseconds();



/*
console.log(year);
console.log(month);
console.log(dayofweek);
console.log(dayofmonth);
console.log(hours);
console.log(minutes);
console.log(seconds);
console.log(milliseconds);
*/

date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date);