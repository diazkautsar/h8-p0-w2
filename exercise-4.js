function kalender(hari, bulan, tahun) {
    var hasil = "";
    switch (bulan) {
        case 1:
            cetak = "januari"
            break
        case 2:
            cetak = "Februari"
            break
        case 3:
            cetak = "Maret"
            break
        case 4:
            cetak = "April"
            break
        case 5:
            cetak = "Mei"
            break
        case 6:
            cetak = "Juni"
            break
        case 7:
            cetak = "Juli"
            break
        case 8:
            cetak = "Agustus"
            break
        case 9:
            cetak = "September"
            break
        case 10:
            cetak = "Oktober"
            break
        case 11:
            cetak = "November"
            break
        case 12:
            cetak = "Desember"
            break
    }
    if (hari < 1 || hari > 31) {
        hasil += "Tanggal yang anda masukan salah"
    } else if ((hari > 30) && (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11)) {
        hasil += "Tanggal yang anda masukan salah. Ini Bulan yang hanya berjumlah 30 hari"
    } else if (bulan < 1 || bulan > 12) {
        hasil += "Bulan yang anda masukan salah"
    } else if (tahun < 1900 || tahun > 2200) {
        hasil += "Tahun yang anda masukan salah"
    } else if (bulan === 2 && hari > 29) {
        hasil += "Bulan Februari tidak ada tanggal lebih dari 29"
    } else if (bulan === 2 && hari > 28 && tahun % 4 !== 0 && tahun % 100 !== 0 && tahun % 400 !== 0) {
        hasil += "Tanggal yang anda masukan salah. Ini bukan tahun kabisat"
    } else {
        hasil += hari + " " + cetak + " " + tahun
    }
    return hasil
}
console.log(kalender(31, 1, 2020));