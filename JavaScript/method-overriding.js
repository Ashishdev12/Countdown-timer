// Method overrinding = a child class will use methods 
//                     with the same name that are
//                    most closely associated with it.


class Vehicle{

    drive(){
        console.log("You drive the vehicle!");
    }
}

    class Car extends Vehicle{
        drive(){
            console.log("You drive the car!");
        }
    }

    class RaceCar extends Car{

    }

    let raceCar = new RaceCar();
    raceCar.drive();