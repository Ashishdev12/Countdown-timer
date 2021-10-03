// static = a method or property that belongs to a class 
//and not any one object.

class Car{
     
    static numberOfCars = 0;

    static begininRace(){
        console.log("This race has begun!");

    }

    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
}

let car1 = new Car("Mustang");
let car2 = new Car("Corvette");
let car3 = new Car("Tesla");

console.log(Car.numberOfCars);
Car.begininRace();