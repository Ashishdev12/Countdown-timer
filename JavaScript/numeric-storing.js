


let number = [3, 14, 1, 2, 5];

//number.sort(); // ASCII Character order

/*number.sort(function(x, y){

    return y - x;
    
});

console.log(number);
*/

number.sort((x, y) => x - y);

console.log(number);


