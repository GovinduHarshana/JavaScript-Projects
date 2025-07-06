// arrow functions - a concise way to wwrite function expressions


function hello() {
    console.log("Hello1");
}

hello();

//---------------------------------------

const hello2 = function() {
    console.log("Hello2");
}

hello2();

//--------------------------------------

const hello3 = (name) => console.log(`Hello ${name}`);

hello3("Govindu");

//--------------------------------------
console.log(" ");

const hello4 = (name) => {console.log(`Hello ${name}`);
                          console.log(`You are old`)};


hello4("Govindu");
