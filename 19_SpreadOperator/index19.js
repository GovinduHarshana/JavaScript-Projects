// // Spread operator - ... (three dots) alows an iterable such as an
// //                  array or string to be expanded
// //                  into separate elements
// //                  (unpacks the elements)


// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);


// console.log(maximum);
// console.log(minimum);


// //------------------------------------------------

// let username = "GovinduHarshana";
// let letters = [...username];

// console.log(letters);

// for(let letter of letters) {
//     console.log(letter);
// }

// letters = [...username].join("  ");

// console.log(letters);

// //-------------------------------------

// console.log(" ");

// let fruits = ["apple", "orange", "banana"];

// let buns = ["ChikenBun", "PastryBun", "OmletBun"];

// let foods = [...fruits, ...buns, "cofee", "tea"].join(" ");

// console.log(foods);




//---------------------------------------------------------------------

// rest parameters - (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array.

//                   spread - expands an array into seperate elements
//                   rest - bundles seperate elements into an array


function openFridge(...foods) {
    console.log(...foods);
}


const food1 = "pizza1";
const food2 = "pizza2";
const food3 = "pizza4";
const food4 = "pizza4";
const food5 = "pizza5";

openFridge(food1, food2, food3, food4, food5);

//---------------------------------------------------

function sum(...numbers) {

    let result = 0;

    for(let number of numbers) {
        result += number;
    }
    return result;
}

const total = sum(1, 2, 3);

console.log(`Your total is ${total}`);

