var nama = 'Reni';
var peran = 'Penyihir';

if (nama === '' && peran === '') {
    console.log('Nama harus diisi!');
} 
else if (nama === 'Rani' && peran === '') {
    console.log('Halo Rani, Pilih peranmu untuk memulai game!');
}
else if (nama === 'Rina' && peran === 'Ksatria') {
    console.log('Selamat datang di Dunia Proxytia, Rina');
    console.log('Halo Ksatira Rina, kamu dapat menyerang dengan senjatamu!');
}
else if (nama === 'Rena' && peran === 'Tabib') {
    console.log('Selamat datang di Dunia Proxytia, Rena');
    console.log('Halo Tabib Rena, kamu akan membantu temanmu yang terluka');
}
else if (nama === 'Reni' && peran === 'Penyihir') {
    console.log('Selamat datang di Dunia Proxytia, Reni');
    console.log('Halo Penyihir Reni. Ciptakan keajaiban yang membantu kemenanganmu!');
}
