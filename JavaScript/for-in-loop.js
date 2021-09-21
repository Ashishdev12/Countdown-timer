// for in loop =  loops through the elements in an array or the properties of an Object less syntex to write, but less flexible//

let letters = ["H","E","L","P"];


let Car = {
    make: "chevy",
    modle: "corvette",
    year: 2022,
    color: "blue"
}

/*for(let i = 0; i < letters.length; i++){
    console.log(letters[i]);
}


for(let i in letters){
    console.log(letters[i]);
    
}
*/
for(let property in Car){
    console.log(Car[property]);
}