//super = Reference to the parent class (super class) 
//         Very similar to "this" keyword
//         Can use a super classes: constructor, methods

class Person{

    constructor(name, age,){
        this.name = name;
        this.age = age;
    }
    hello(){
        console.log("Hello",this.name);
        console.log("You are",this.age,"years old");   
    } 

}


class Student extends Person{

    constructor(name, age, gpa){
        super(name, age);
        this.gpa = gpa;
    }
    hello(){
       super.hello();
        console.log("Your gpa is",this.gpa);
    }
}

class Teacher extends Person{

    constructor(name, age, classSize){
        super(name, age);
        this.classSize = classSize;

    }
    hello(){
        super.hello();
        console.log("Your class size is",this.classSize);
    }
}

let student = new Student("Ashish", 30, 4.0);
let teacher = new Teacher("Sindhu", 29, 30);

/*console.log(student.name);
console.log(student.age);
console.log(student.gpa);

console.log(teacher.name);
console.log(teacher.age);
console.log(teacher.classSize);
*/

student.hello();
teacher.hello();
