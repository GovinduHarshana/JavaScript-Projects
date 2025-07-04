// .reduce() = reduce the elements of an array
//             to a single value.


// const prices = [5, 30, 10, 25, 15, 20];

// const total = prices.reduce(sum);

// console.log(`$ ${total}`);

// function sum(accumulator, elements) {
//     return accumulator + elements;
// }


const grades = [33, 44, 55, 67, 99, 31, 86, 99.32];

const maximum = grades.reduce(maxNum);

console.log(maximum);


function maxNum (accumulator, element) {
    return Math.max(accumulator, element)
}