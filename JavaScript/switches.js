// The switch statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case , as well as statements in case s that follow the matching case .

var grade = "Pizza";

switch (grade){

    case "A":
        console.log("You did great!");
        break;


    case "B":
        console.log("You did good!");
        break;

    case "C":
        console.log("You did okay!");
        break;


    case "D":
        console.log("You did not do well!");
        break;

    case "F":
        console.log("You Failed!");
        break;
    
    default:
        console.log(grade,"is not a letter grade");
            






}