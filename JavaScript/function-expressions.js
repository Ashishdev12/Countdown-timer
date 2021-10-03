// function expression = A function can also be defined using an expression
//  function expression can be stored in variable.
//  the varibale can be used as function
//  they can be invoked by adding ()

//     1. useful has closer
//     2. used in IIFE (funcs that runs as soon as it's defined)
//     3. can be passed as arguments to other functions.

//  ***function declaration****

    /*sayHello();

    function sayHello(){
        console.log("Hello");
    }
    */
    let greeting = "Hello"

    outputWebsite(greeting);

    function outputConsole(x){
        console.log(x)

    }

    function outputWebsite(x){

        document.getElementById("myH1").innerHTML = x;
    }





//  ****function expression*****

    //let greeting = function(){console.log("Hello")};

   /* let greeting = function(){document.getElementById("myH1").innerHTML = "Hello"};


    output(greeting);

    function output(func){
        func();
    }
    */