// const - a variable that can't be changed


let pi = 3.14159;
let radius;
let circumference;

// radius = window.prompt(`Enter the radius of a circle`);

// radius = Number(radius);

// circumference = 2 * pi * radius;

// console.log(`Your Circumference is: ${circumference}`);


// document.getElementById("circumference").textContent = circumference;

document.getElementById("submit-btn").onclick = function() {
        radius = document.getElementById("my-radius").value;
        radius = Number(radius);
        circumference = 2 * pi * radius;
        console.log(`Your Circumference is: ${circumference}`);
        document.getElementById("final-circumference").textContent = circumference;
}