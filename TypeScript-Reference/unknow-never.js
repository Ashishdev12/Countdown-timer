"use strict";
var userInput;
var userName;
userInput = 5;
userName = 'Ashish';
if (typeof userInput === 'string') { /// unknow.
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occurred!', 500);
