// inheritance - allows a new class to inherit properties and methods
//               from an existing class (parent -> child)
//               help with code reusability

class Animal{
    alive = true;

    eat() {
        console.log(`This ${this.name} is eating`);
    }
    sleep() {
        console.log(`This ${this.name} is sleeping`);
    }
}

class Rabbit extends Animal {
    name = "rabbit";
}

class Fish extends Animal {
    name = "fish";
}

const rabbit = new Rabbit();
const fish = new Fish();

console.log(rabbit.alive);
rabbit.eat();