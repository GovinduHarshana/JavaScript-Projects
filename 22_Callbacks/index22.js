// callback - a function that is passes as an argument
//            to another function.

// used to handle asynchronous operations:
//            1. Reading a file.
//            2. Network Requests.
//            3. Interacting with databases.

//            "Hey, when you're done, call this next."


// function hello() {
//     setTimeout(function () {
//         console.log("Hello!");
//     } , 3000);
// }

// function goodbye() {
//     console.log("Goodbye!");
// }

// hello();
// goodbye();



function hello(callback) {
    console.log("Hello!");
    callback();
}


function goodbye() {
    console.log("Goodbye!");
}

hello(goodbye);