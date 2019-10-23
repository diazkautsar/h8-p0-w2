//1
console.log("Nomer 1")
var loopingPertama = 2
var loopingKedua = 20

console.log("LOOPING PERTAMA")
while(loopingPertama <= 20) {
    console.log(loopingPertama + " - I Love Coding")
    loopingPertama += 2
}
console.log("\nLOOPING KEDUA")
while(loopingKedua >= 2) {
    console.log(loopingKedua + " - I will become fullstack developer")
    loopingKedua -= 2
}


//2
console.log("\n\nNomer 2")
console.log("LOOPING PERTAMA");
for (x = 1; x < 21; x++ ) {
    console.log(x + ' - I love coding');
}
console.log("\nLOOPING KEDUA");
for (y = 20; y > 0; y--) {
    console.log(y + ' - I will become fullstack developer');
}


//3
console.log("\n\nNomer 3")
console.log("COUNTER 1");
for (counterW = 1; counterW <= 100; counterW += 1) {
    if(counterW % 2 !== 0) {
        console.log("GANJIL");
    } else {
        console.log("GENAP");
    }
}

console.log("\n\nCOUNTER 2");
for (counterX = 1; counterX <= 100; counterX += 2) {
    if(counterX % 3 === 0) {
        console.log(counterX + " KELIPATAN 3");
    }
}

console.log("\nCOUNTER 5");
for (counterY = 1; counterY <= 100; counterY += 5) {
    if(counterY % 6 === 0) {
        console.log(counterY + " KELIPATAN 6");
    }
}

console.log("\nCOUNTER 9");
for (counterZ = 1; counterZ <= 100; counterZ += 9) {
    if(counterZ % 10 === 0) {
        console.log(counterZ + " KELIPATAN 10");
    }
}