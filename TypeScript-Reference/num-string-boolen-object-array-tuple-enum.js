"use strict";
// number - 1,5.3, -10
// string - "Hi","Hi"
// boolen - true, false
// object - {age: 30}
// Array - [1,2,3]
// Tuple - [1.2]
// Enum - enum{NEW, OLD}
// Any - *
/*const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]; // used this code of string, boolen, array, Tuple.
} = {
    name: "Ashish",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
*/
// const ADMIN = 0;
// const READ_ONLY = 1; // enum
// const AUTHOR = 2;
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Ashish",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
//person.role = [0, 'admin'];
var favoriteActivities;
favoriteActivities: ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
