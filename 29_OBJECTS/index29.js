// Object - A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)

//          object = {key:value,
//                    function()}

const person1 = {
    firstName: "Harsh",
    lastName: "Mudu",
    age: 25,
    isEmployed: true,
    sayHello: function(){console.log("Hi! I am Govindu!")}
}

const person2 = {
    firstName: "Ama",
    lastName: "Hiru",
    age: 23,
    isEmployed: true,
    sayHello:() => console.log("Hi! I am Hiruni!"),
}

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
person1.sayHello();

console.log(" ");

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
person2.sayHello();