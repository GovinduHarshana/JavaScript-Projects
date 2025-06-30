// IF STATEMENTS - if a condition is true, execute some code
//                 if  not, do something else


// let age = window.prompt("How old are you?");



// age = Number(age);


// if (age >= 18) {
//     console.log("You are old enough to enter this site");

// } else {
//     console.log("You must be 18+ to enter this site")
// }

//----------------------------------------------------------

// let isStudent = window.prompt("Are you a student? (yes/no)");

// if (isStudent.toLowerCase() === "yes") {
//     console.log("Hello Student");
// } else {
//     console.log("You are NOT a Student");
// }


// let age = Number(window.prompt("How old are you?"));

// let hasLicense = window.prompt("Do you have license? (yes/no)");

// if (age >= 17) {
//     console.log("You are old enough to drive");

//     if (hasLicense.toLowerCase() === "yes") {
//         console.log("You Can Drive!")
//     } else{
//         console.log("You can't drive without a licence.")
//     }
// } else {
//     console.log("You must be 17 to have a license.")
// }

//----------------------------------------------------------


// let ageInput = window.prompt("How old are you?");
// let age = Number(ageInput);

// if (isNaN(age)) {
//     console.log("Please enter age in number.")
//     alert("Please enter age in number.")
// } else {
//     let hasLicenseInput = window.prompt("Do you have license? (yes/no)").toLowerCase();

//     if (hasLicenseInput !== "yes" && hasLicenseInput !== "no") {
//         alert("Please enter 'yes' or 'no' for the license question.");
//     } else {
//         let hasLicense = hasLicenseInput === "yes";

//         if (age >= 17) {
//             console.log("You are old enough to Drive!");
//             alert("You are old enough to Drive!");

//             if (hasLicense) {
//                 console.log("You Can Drive!");
//                 alert("You Can Drive!");
//             } else {
//                 console.log("You can't drive without a license.");
//                 alert("You can't drive without a license.")
//             }
//         } else {
//             console.log("You must be 17 to have a license.");
//             alert("You must be 17 to have a license.");
//         }
//     }
// }

//---------------------------------------------------------

// let ageInput = window.prompt("How old are you?");
// let age = Number(ageInput);
// let hasLicenseInput = window.prompt("Do you have license? (yes/no)").toLowerCase();

// if(isNaN(age)){
//     console.log("Please enster age in number.");
//     alert("Please enster age in number.");
// } else if (hasLicenseInput !== "yes" && hasLicenseInput !== "no") {
//     alert("Please enter 'yes' or 'no' for the license question.");
//     console.log("Please enter 'yes' or 'no' for the license question.");
// } else if (age < 17) {
//     alert("You must be 17 to have a license.");
//     console.log("You must be 17 to have a license.");
// } else if (hasLicenseInput === "yes") {
//     console.log("You are old enough to drive");
//     console.log("You Can Drive!");
//     alert("You are old enough to drive");
//     alert("You Can Drive!");
// } else {
//     console.log("You are old enough to drive. But,");
//     console.log("You can't drive without a license.");
//     alert("You are old enough to drive. But, ");
//     alert("You can't drive without a license.");
// }

//---------------------------------------------------------------


document.getElementById("submit").onclick = function () {
    const ageInput = document.getElementById("user-age").value;
    const licenseInput = document.getElementById("user-hasLicence").value;
    const result = document.getElementById("resultDisplay");

    let age = Number(ageInput);

    result.innerHTML = "";
    result.className = "";

    // Check if age is a valid number
    if (isNaN(age) || ageInput ==="") {
        result.innerHTML = "❌ Please enter age in number.";
        result.className = "error";
        return;
    }

    // Check if licence input is yes or no
    if (licenseInput !== "yes"  && licenseInput !== "no") {
        result.innerHTML = "❌ Please enter 'yes' or 'no' for license.";
        result.className = "error";
        return;
    }

    // Decision logic
    if(age < 17) {
        result.innerHTML = "❌ You must be 17 or older to have a license.";
        result.className = "error";
    } else if (licenseInput === "yes") {
        result.innerHTML = "✅ You are old enough to drive. 🚗 You can drive!";
        result.className = "success";
    } else {
        result.innerHTML = "✅ You are old enough to drive.<br>❌ But you can't drive without a license.";
        result.className = "error";
    }
}