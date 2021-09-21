//JavaScript object is a standalone entity that holds multiple values in terms of properties and methods. Object property stores a literal value and method represents function. An object can be created using object literal or object constructor syntax.

var human1 = {
    name: "Ashish",
    age: 30,

    eat : function(){
            console.log("Ashish is eating food")

    },

    drink : function(){
            console.log("Ashish is drinking juice *brup*")
    },

    sleep : function(){
        console.log("Ashish has passed out")
    },
};


var human2 = {
    name: "sandeep",
    age: 37,

    eat : function(){
            console.log("sandeep is eating food")

    },

    drink : function(){
            console.log("sandeep is drinking juice *brup*")
    },

    sleep : function(){
        console.log("sandeep has passed out")
    },
};

    human1.name //dot notation
    human1['name'] //bracet notation

        console.log(human1.name);
        console.log(human1.age);
        human1.eat();
        human1.drink();
        human1.sleep();

        console.log(human2.name);
        console.log(human2.age);
        human2.eat();
        human2.drink();
        human2.sleep();