// super - keyword is used in classes to call the constructor or
//         access the properties and methods of a parent (superclass)
//         this = this object
//         super = the parent

class Animal {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed} mph.`);
    }
}

class Rabbit extends Animal {

    constructor(name, age, runSpeed) {
        super(name, age);
        this.runSpeed = runSpeed;
    }

}

class Fish extends Animal {
    
    constructor(name, age, swimSpeed) {
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 25);
const fish = new Fish("fish", 2, 55);

console.log(rabbit);
console.log(rabbit.name);

console.log(fish);
console.log(fish.runSpeed);

rabbit.move(rabbit.runSpeed);