// Variable scope - Where a variable is recognized and
//                  accessible (local vs global)


// let x = 1;
// let x = 2;

let y = 3;  // Global Scope


function function1() {
    let x = 1;
    console.log(x);    //Local
    console.log(y);     // Global
}

function function2() {
    let x = 2;
    console.log(x);   //Local
    console.log(y)      // Global
}

function1();
function2();