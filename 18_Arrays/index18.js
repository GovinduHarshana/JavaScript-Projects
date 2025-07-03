// array - a variable like structure that can hold
//         more than 1 value.

let fruits = ["apple", "orange", "banana"];

// fruits[3] = "coconut";
fruits.push("coconut");

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


//--------------------------------
console.log(" ");
fruits.pop();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


//------------------------------------
console.log(" ");
fruits.shift();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

fruits.unshift();

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);


//-------------------------------------------
console.log(" ");

let buns = ["chickenBun", "PolsambolBun", "chocolateBun"];

for (let i = 0; i < buns.length; i++) {
    console.log(`You add ${buns[i]}`);
}

let numOfBuns = buns.length;

console.log(numOfBuns)

let indexOfPBun = buns.indexOf("PolsambolBun");
console.log(`PolsambolBun index is ----  ${indexOfPBun}`);

let indexOfPsBun = buns.indexOf("PastryBun");
console.log(`PastryBun index is ----  ${indexOfPsBun}`);

//-------------------------------------------------------------

console.log(" ");

buns.sort().reverse();   // P is capital in PolsambolBun

for (let bun of buns){
    console.log(bun);
}