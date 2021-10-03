// nasted functions = functions inside other functions.
// outer fuctions have access to innner functions 
// Inner functions are "hidden" from outside the scope.
// used in closer (future video topic)

function login(){

    let userName = "Ashish";
    let userInbox = 0;

    function displayUserName(){
        console.log("Hello", userName);
    }
    
    function displayUserInbox(){

        console.log("You have", userInbox,"new messages")

    }
    displayUserName();
    displayUserInbox();
}

   login();