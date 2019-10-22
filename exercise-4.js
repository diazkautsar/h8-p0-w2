var tanggal = 30;
var bulan = 2;
var tahun = 2020;
var pesan = '';
var cetak;

// Validasi Bulan berjumlah 31.
if (bulan === 1 || bulan === 3 || bulan === 5 || bulan === 7 || bulan === 8 || bulan === 10 || bulan === 12) {
    if (tanggal < 1 || tanggal > 31) {
        pesan += 'Revisi tanggal. Tanggal tidak boleh kurang dari 1 dan tidak boleh lebih dari 31 karena ini bulan berjumlah 31 hari\n'
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
        pesan += 'Revisi tanggal. Tanggal tidak boleh kurang dari 1 dan tidak boleh lebih dari 30 karena ini berjumlah 30 hari\n'
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
            pesan += 'Revisi tangal. Tanggal tidak boleh kurang dari satu dan tidak boleh lebih dari 29 karena ini Bulan Februari di Tahun Kabisat\n';
        } else {
            switch (bulan) {
                case 2:
                    cetak = 'Februari';
                    break;
            }
        } 
    } else {
        if (tanggal < 1 || tanggal > 28) {
            pesan += 'Revisi tangal. Tanggal tidak boleh kurang dari satu dan tidak boleh lebih dari 28 karena ini Bulan Februari berjumlah 28 hari\n';
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
    pesan += 'Revisi tahun. Tahun tidak boleh kurang dari 1900 dan tidak lebih dari 2200';
}


if (pesan.length>0) {
    console.log(pesan)
} else {
    console.log(tanggal + ' ' + cetak + ' ' + tahun);
}


















