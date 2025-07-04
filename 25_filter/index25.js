// .filter() - creates a new array by filtering
//             out elements

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd)

console.log(evenNums);
console.log(oddNums);

function isEven(elements) {
    return elements % 2 === 0;
}

function isOdd(elements) {
    // return elements % 2 === 1;
    return elements % 2 !== 0;
}
