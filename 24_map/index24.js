//  .map()   -  accepts a callback and applies that function
//              to each element of an array, then return a new array.


// const numbers = [1, 2, 3, 4, 5];

// const squares = numbers.map(square);

// console.log(squares);

// function square(element) {
//     return Math.pow(element, 2)
// }



let fruits = ["apple", "banana", "mango"];


fruits.forEach(function(fruit) {
    console.log("I like " + fruit);
});



let upperCaseFruits = fruits.map(function(fruit) {
    return fruit.toUpperCase();
});

console.log(upperCaseFruits);


//------------------------------------------

const dates = ["2025-07-04", "2024-01-28", "2023-12-16"];


function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]} / ${parts[1]} / ${parts[0]}`;
}

const formattedDates = dates.map(formatDates);

console.log(formattedDates);