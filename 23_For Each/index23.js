// forEach() = method used to iterate over the elements
//             of an array and apply a specified function (callback)
//             to each elements

//             array.forEach(callback)


let numbers = [1, 2, 3, 4, 5];


function display(element) {
    console.log(element);
}

function double(element, index, array) {
    array[index] = element * 2;
}

numbers.forEach(display);

console.log(" ");

numbers.forEach(double);
numbers.forEach(display);