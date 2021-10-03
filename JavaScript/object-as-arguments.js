class Car{

    constructor(model, color){
        this.model = model;
        this.color = color;

    } 
    }

    function changeColor(car, color){

        car.color = color;

        
}

    let car1 = new Car("Ford", "red");
    let car2 = new Car("Tesla", "Blue");


    changeColor(car1, "black");

    console.log(car1.model, car1.color);
    console.log(car2.model, car2.color);

