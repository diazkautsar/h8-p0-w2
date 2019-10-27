function balikKata(kata) {
    hasil = "";
    for (var word = kata.length - 1; word >= 0; word--) {
        hasil += kata[word]; 
    }
    return hasil
}
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS