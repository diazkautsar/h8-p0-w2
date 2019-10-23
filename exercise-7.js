// 1. Menyusun Barisan Bintang
console.log("\nSoal 1")
for (var rows1 = 1; rows1 <= 5; rows1++) {
    console.log('*')
}



// 2. Menyusun Barisan Tangga Bintang Dengan Nested Looping
// jika rows2 = 5
console.log("\nSoal 2")
for (var rows2 = 1; rows2 <= 5; rows2++) {
    var hasil = '';
    for (var rows21 = 1; rows21 <= 5; rows21++) {
        hasil = hasil + '*';
    }
    console.log(hasil)
}



// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
//
console.log("\nSoal 3")
for (var rows3 = 1; rows3 <= 5; rows3++) {
    var kata = '';
    for (var rows31 = 0; rows31 < rows3; rows31++) {
        kata = kata + '*';
    }
    console.log(kata)
}
