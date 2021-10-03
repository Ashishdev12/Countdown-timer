// anonymous function = function w/o a name. Often not accessible after its initial creation.

// benefits = Doesn't clutter global namespace usable once can be passed as aruguments

//************************* */

//IIFE = a JS functions that runs a soon as it is defined
// grouping operator = () 

(function(){
    document.getElementById("myH1").innerHTML = "hey!";
})();

// setTimeout(function, millideconds);

/*let task = function(){document.getElementById("myH1").innerHTML = "sup?";}*/


setTimeout(function(){document.getElementById("myH1").innerHTML = "sup?"},

1000);