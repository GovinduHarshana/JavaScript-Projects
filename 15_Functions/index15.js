// function - A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.



function happyBirthday(username, age) {
    console.log("Happy Birthday to me!");
    console.log("Happy Birthday to YOU!");
    console.log(`Happy Birthday dear ${username}`);
    console.log("Happy Birthday to you!");
    console.log(`You are ${age} years old.`)
}

// happyBirthday("Govindu", 25);
// happyBirthday("SpONCHBob", 30);


//-------------------------------------------------

let result;

function add(x, y) {
    result = x + y;
    return result;
}


// let answer = add (2, 3);
// console.log(answer);

//-----------------------------------------------

// function isEven(num) {
//     if ( num % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }


function isEven(num) {
    return num % 2 == 0 ? true : false;
}

// console.log(isEven(5));

//------------------------------------------

function isValidEmail(emali) {
    if (emali.includes("@")) {
        return (`${emali} is valid email.`);
    }
    else {
        return (`${emali} is Invalid email!.`);
    }
}

console.log(isValidEmail("123@kmdke"));