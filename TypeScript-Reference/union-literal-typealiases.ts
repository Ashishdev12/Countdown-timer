function combine(
    input1: number | string, 
    input2: number | string, // Union types
    resultConversion: string

    ) {   
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number') { // run-time type check.
        result = input1 + input2;
    }else {
        result = input1.toString() + input2.toString();
    }                                                               // Till here run-time
    if (resultConversion === 'as-number') {
        return +result;
    } else {
        return result.toString();
    } 
    
}

const combinedAges = combine(30, 26,'as-number');
console.log(combinedAges);

const combinedStringAges = combine('30','26', 'as-number');
console.log(combinedStringAges);

const combineNames = combine('Ashish', 'Sandeep','as-text');
console.log(combineNames);