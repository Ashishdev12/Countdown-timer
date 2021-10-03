//callback = function passed as an argument to another fuction Allows a function to invoke another function.


let message;

function displayConsole(output){

    console.log(output);
}

function displayDOM(output){

    document.getElementById("myH1").innerHTML = output;

}

function setMassage(text, callback){

    message = text;
    callback(message);
}

setMassage("Hi mom!", displayDOM);