// Temperature Convertor


const textBox = document.getElementById("textBox");
const toCelsius = document.getElementById("toCelsius");
const toFahrenheit = document.getElementById("toFahrenheit");
const result = document.getElementById("result");
let temp;

function convert() {
    if (toCelsius.checked) {
        temp = Number(textBox.value);
         temp = (temp - 32) * 5 / 9;
        result.textContent = temp + " \u2103"

    }
    else if (toFahrenheit.checked) {        
        temp = Number(textBox.value);
        temp = (temp * 9 / 5) + 32;
        result.textContent = temp + " \u2109"

    }
    else {
        result.textContent = "Select a unit";
    }
}