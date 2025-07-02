// While loop

// let username = "";

// while(username === "" || username === null) {
//     username = window.prompt("Please enter username:");
// }

// console.log(` Hello ${username}`);



//--------------------------------------------------
//do while loop

// let username;

// do {
//     username = window.prompt("Please enter username:");
// }
// while (username === "" || username === null);

// console.log (`Hello ${username}`);


//-----------------------------------------------------


// let loggedIn = false;
// let username;
// let password;

// while (!loggedIn) {
//     username = window.prompt("Enter your username: ");
//     password = window.prompt("Enter your password: ");

//     if (username === "adminGo" && password === "123Go") {
//         loggedIn = true;
//         console.log("loggedIn.............");
//     } else {
//         console.log("Invalid credentials Please try again");
//     }
// }

// console.log("Have A Nice Day!");


//------------------------------------------------------------

// function login() {
//     const user = document.getElementById("username").value.trim();
//     const pass = document.getElementById("password").value;

//     const messageBox = document.getElementById("message");

//     if (user === "adminGo"  && pass == "123Go") {
//         messageBox.textContent = "Logged in successfully.\n Have a Nice Day!";
//         messageBox.className = "message success";

//     } else {
//         messageBox.textContent = "Invalid credentials. Please try again.";
//         messageBox.className = "message error";
//     }
// }

//----------------------------------------------------------------------

function login() {
    const user = document.getElementById("username").value.trim();
    const pass = document.getElementById("password").value;
    const messageBox = document.getElementById("message");
    
    // Remove previous classes and hide message
    messageBox.classList.remove("show", "success", "error");
    
    // Small delay for smooth transition
    setTimeout(() => {
        if (user === "adminGo" && pass === "123Go") {
            messageBox.innerHTML = "Logged in successfully!<br>Have a Nice Day! 🎉";
            messageBox.classList.add("message", "success", "show");
        } else {
            messageBox.innerHTML = "Invalid credentials.<br>Please try again.";
            messageBox.classList.add("message", "error", "show");
        }
    }, 100);
}

// Add Enter key support
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        login();
    }
});

// Add input animation effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});