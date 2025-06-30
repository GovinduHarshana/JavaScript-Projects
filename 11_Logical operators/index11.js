// logical operators - Used to combine or manipulate boolean values
//                     (true or false)

//     AND = &&
//     OR  = ||
//     NOT = !

const temp = 65;

// if (temp > 0 && temp <= 30){
//     console.log("The weather is Good");
// }
// else {
//     console.log("The weather is BAD!!!")
// }

//-------------------------------------------

if (temp <= 0 || temp > 30){
    console.log("The weather is BAD!!!");
}
else {
    console.log("The weather is Good")
}


//-----------------------------------------------

//   = assignment operator
//  == comparison operator (compare if values are equal)
// === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
// !== strict inequality operator

const PI =3.14;

if (PI == "3.14") {
    console.log("This is Pi");
}
else {
    console.log("This is not Pi");
}