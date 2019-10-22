var tanggal = 31;
var bulan = 4;
var tahun = 2300;
var pesan = '';
var cetak;

// Validasi Bulan berjumlah 31.
if (bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) {
    if (tanggal < 1 || tanggal > 31) {
        pesan += 'Tanggal Salah BOS\n'
    } else {
        switch (bulan) {
            case 1:
                cetak = 'Januari';
                break;
            case 3:
                cetak = 'Maret';
                break;
            case 5:
                cetak = 'Mei';
                break;
            case 7:
                cetak = 'Juli';
                break;
            case 8:
                cetak = 'Agustus';
                break;
            case 10:
                cetak = 'Oktober';
                break;
            case 12:
                cetak = 'Desember';
                break;
        }
    }
}
// Validasi Bulan Berjumlah 30
if (bulan === 4 || bulan === 6 || bulan === 9 || bulan === 11) {
    if (tanggal < 1 || tanggal > 30) {
        pesan += 'anda PUSING?\n'
    } else {
        switch (bulan) {
            case 4:
                cetak = 'April';
                break;
            case 6:
                cetak = 'Juni';
                break;
            case 9:
                cetak = 'September';
                break;
            case 11:
                cetak = 'Nopember';
                break;
        }
    }
}
// Validasi Bulan Februari
if (bulan === 2) {
    if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 4 === 0 && tahun % 100 === 0)) {
        if (tanggal < 1 || tanggal > 29) {
            pesan += 'Kekurangan atau Kelebihan\n';
        } else {
            switch (bulan) {
                case 2:
                    cetak = 'Februari';
                    break;
            }
        } 
    } else {
        if (tanggal < 1 || tanggal > 28) {
            pesan += 'Kekurangan braaayy\n';
        } else {
            switch (bulan) {
                case 2:
                    cetak = 'Februari';
                    break;
            }
        }
    }
}
// Validasi tahun 1900 - 2200
if (tahun < 1900 || tahun > 2200) {
    pesan += 'Salah Tahun BOS';
}


if (pesan.length>0) {
    console.log(pesan)
} else {
    console.log(tanggal + ' ' + cetak + ' ' + tahun);
}


















