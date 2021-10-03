// class = A "blueprint" for creating objects. Define properties and/or methods.

class Car{
    drive(){
        console.log("You drive the car!");
    }

    break(){
        console.log("You step on the brakes!");
    }
}

let car = new Car();

car.drive();
car.break();