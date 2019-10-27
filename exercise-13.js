function xo(str) {
    var jumlahX = '';
    var jumlahO = '';
    for (var i = str.length; i >= 0; i--) {
        if(str[i] === 'x'){
            jumlahX += 'x'
        } else if (str[i] === 'o') {
            jumlahO += 'o'
        }
    }
    if(jumlahX.length === jumlahO.length) {
        return true
    } else {
        return false
    }
}
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true