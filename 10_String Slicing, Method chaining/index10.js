// String Slicing - Creating a substring from a
//                  portion of another string

//                  string.slice(start, end)

const fullName = "Govinduni Harshana";

// let firstName = fullName.slice(0, 7);

// let lastName = fullName.slice(8, 16);   
// //let lastName = fullName.slice(8);

// console.log(firstName);
// console.log(lastName);


// let firstChar = fullName.slice(0, 1);
// let lastChar = fullName.slice(-1);

// console.log(firstChar);
// console.log(lastChar);

//------------------------------------------------------------------

// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let lastName = fullName.slice(fullName.indexOf(" ") + 1);



// console.log(firstName);
// console.log(lastName);

//------------------------------------------------------------------

// const email = "govindu1@gmail.com";

// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@") + 1);

// console.log(username);
// console.log(extension);








//-------------------------------------------------------------------






// Method Chaining - Calling one method after another
//                   in one continuous line of code.

//----- No Method Chaining

// let username = window.prompt("Enter You Username:");

// username = username.trim();

// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();

// username = letter + extraChars

// console.log(letter);
// console.log(extraChars);
// console.log(username);

//------------------------------------------------

//-----With Method Chaining

let username = window.prompt("Enter You Username:");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);