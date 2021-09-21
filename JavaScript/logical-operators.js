// &&	Logical AND: true if both the operands/boolean values are true, else evaluates to false
// ||	Logical OR: true if either of the operands/boolean values is true . evaluates to false if both are false
// !	Logical NOT: true if the operand is false and vice-versa

/*var temperature = -10; //Celsius

if(temperature > 30){
    console.log("Its Hot outside!");
}

else if(temperature >0 && temperature <=30){
    console.log("Its warm outside");
}

else{
    console.log("Its cold outside");
} 
*/

/*var hour = 8;

if(hour < 6 || hour >= 20){
    console.log("Its Dark outside");
}
else{
    console.log("Its Light outside");
}
*/

var myName = window.prompt("Enter your name");

if(!(myName == "")){
    console.log("Hello",myName);
}
else{
    console.log("You did not enter your name");
}