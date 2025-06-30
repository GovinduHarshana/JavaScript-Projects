//Random Number Generator

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum);

const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const popup = document.getElementById("popup");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function() {
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    console.log(randomNum1);
    console.log(randomNum2);
    console.log(randomNum3);
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;

    if(randomNum1 === randomNum2 || randomNum2 === randomNum3 || randomNum1 === randomNum3 ) {
        popup.style.display = "block";
        overlay.style.display = "block";
    }

}

closeBtn.onclick = function() {
    popup.style.display = "none";
    overlay.style.display = "none";
}

