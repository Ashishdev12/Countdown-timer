// this = A reference to the object that we're currently workig=ng with

class Car{

    constructor(make, model, year, color){
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;


    }

    
    drive(){
        console.log("You drive the!",this.model);
    }
    break(){
        console.log("You step on the",this.model,"'s brakes!");
    }
    whatIsThis(){
        return this;
    }
}

let car1 = new Car("Ford", "Mustang", 2022, "red");
let car2 = new Car("Chevy", "Corvette", 2021, "blue");

car1.drive();
car2.break();


