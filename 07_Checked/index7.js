// .checked - property that determines the checked state of an
//            HTML checkbox or radio button element


const myCheckBox = document.getElementById ("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

submitBtn.onclick = function() {
    if (myCheckBox.checked){
       subResult.textContent = "You are Subscribed!"; 
    } else{
        subResult.textContent = "Please Subscribe";
    }

    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa card`;
    } 
    else if (masterCardBtn.checked) {
        paymentResult.textContent = `You are paying with master card`;
    } 
    else if(payPalBtn.checked) {
        paymentResult.textContent = `You are paying with Paypal`;
    } 
    else {
        paymentResult.textContent = `Please select a payment option.`;
    }
}
