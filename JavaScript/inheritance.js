// inheritance = useful for code resusbility 
//               Reuse properties and methods of an existing class.
//               Children classses inherit from classes.


class Animal{

    constructor(){
        this.alive = true; //this is property
    }

    eat(){
        console.log("This animal is eating"); // method
    }
}

class Rabit extends Animal{

}

class Fish extends Animal{

}

class Tiger extends Animal{

}

let rabit = new Rabit(); // object
let fish = new Fish();
let tiger = new Tiger();

console.log(rabit.alive);
rabit.eat();

