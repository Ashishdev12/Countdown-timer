// useful string properties & methods

var myName = "Ashish Kumar";
var myStreet = "123 Fake st.";
var myCity = "Hyderbad 1234";
var myPhone = "123-456-7890";


console.log(myName.length);
console.log(myName.charAt(0));
console.log(myName.indexOf(" "))
console.log(myName.lastIndexOf("u"));
console.log(myName.trim());
console.log(myName.toUpperCase());
console.log(myName.toLowerCase());


//var firstName = myName.slice(0, 6);

var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);


//var lastName = myName.slice(6);
var lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

var myAddress = myStreet.concat(" ",myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-","");
console.log(myPhone);