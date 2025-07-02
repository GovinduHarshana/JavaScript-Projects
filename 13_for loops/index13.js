// for loops - repeat some code Limited amount of times.

for(let i = 0; i < 3; i++) {
    console.log(`Hello World! - ${i}`);
}

console.log("Bye Bye Yaluwe.")

//-----------------------------------------------
console.log(" ");

for (let i = 20; i > 0; i--) {
    if (i == 13) {
        console.log("13 is Special")
        continue;
    } else {
        console.log(i);
    }
}