function xo(str) {
    var hasilX = 0
    var hasilO = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i] === "x") {
            hasilX++
        } else {
            hasilO++
        }
    }
    if (hasilX === hasilO) {
        return true
    } else {
        return false
    }
    // return output
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true