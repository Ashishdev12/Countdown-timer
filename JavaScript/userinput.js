/*
The JavaScript input text property is used to set or return the value of a text input field. The value property contains either the default value that is present upon loading the element, the value entered by the user, or the value assigned by the script.*/

/*var myName = window.prompt("what's is your name");

console.log("Hello",myName);*/

document.getElementById("myButton").onclick = function(){

    var myName = document.getElementById("myText").Value;

console.log("Hello",myName);
}