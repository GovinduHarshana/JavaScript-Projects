// function declaration - define a reusable block of code
//                        that performs a specific task


// function expressions - a way to define function as
//                        values or variables

function hello() {
    console.log("Hello");
}

hello();

//--------------------------------------------
const hello2 = function() {
    console.log("Hello2");
}

hello2();

//-----------------------------------------

// function hello3(){
//     console.log("hello3");
// }

// setTimeout(hello3, 3000);


function hello3(){
    console.log("hello3");
}

setTimeout(function(){
    console.log("Hello3");
}, 3000);
//--------------------------------------------------

