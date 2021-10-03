// forEach() = performs a function for each element in an array.

// map() = performs a function for each element in an array, then stores the returned values in a new array

//  filter() = Returns the elements of an array that meets a conditions specified in a function

//  reduce() = Reduces an array to a single value The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

/* let total = 0;
let cart = [5, 6, 7, 8, 9,];

function checkOut(element){

    total += element;

}

    cart.forEach(checkOut);

    console.log("Your total is: $"+total);
*/
//---------------------------------------------------------------------------------

/*let storeUSD = [5, 6, 7, 8, 9,];

function toEuros(value){
    value *= 0.85;
    return value;
}
 
let storeEUR = storeUSD.map(toEuros);

console.log(storeUSD);
console.log(storeEUR);
*/
//---------------------------------------------------------------------------------------

/*let students = [16, 17, 18, 19, 20];

function checkAge(age, index, array){

    if(age >= 18){
        return age;

    }

}

let adultStudents = students.filter(checkAge);

console.log(adultStudents);
*/

//-------------------------------------------------------------------------------------

let letters = ["H", "E", "L", "P"];

function combineLetters(total, nextLetter, index, array){

    return total + nextLetter;


}

let word = letters.reduce(combineLetters);

console.log(word);