
function jump(){
    console.log("You jump!");
}


function punch(){
    console.log("You punch!");
}


function kick(){
    console.log("You kick!");
}


function block(){
    console.log("You block!");
}

let actions = [];

actions = [jump, punch, kick, block]

/*for(let i = 0; i < actions.length; i++){

    actions[i]();
}
*/

actions.forEach(func => func());
    
