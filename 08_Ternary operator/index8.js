// ternary operator = a shortcut to if{} and else{} statements
//                    helps to assign a variable based on a condition
//                    condition ? codeIfTrue : codeIfFalse;

// let age = 7;

// let message =  age >= 18 ? "You're an adult" : "You're a minor";

// // alert(message);
// console.log(message);


//--------------------------------------------------------------------------

let purchase = 10;
let discount;

discount = function() {
    return purchase * 1 / 10;
};

let message = purchase >= 100 
? `You get a discount of $ ${discount()}. \nFinal total = ${purchase - discount()}.` 
: `Soory, you're not eligible for discount. \nFinal total = ${purchase}.`;

console.log(message);