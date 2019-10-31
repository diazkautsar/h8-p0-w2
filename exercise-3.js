function proxytia(nama, peran) {
    var hasil = "";
    if (nama === "" && peran === "") {
        hasil += "Nama harus diisi"
    } else if (nama && peran === "") {
        hasil += "Halo " + nama + ", Pilih peranmu untuk memulai game"
    } else if (nama, peran) {
        hasil += "Selama datang di Dunia Proxyitia, " + nama + "\n"
        if (peran === "ksatria") {
            hasil += "Halo " + peran + " " + nama + ", kamu dapat menyerang dengan senjatamu"
        } else if (peran === "tabib") {
            hasil += "Halo " + peran + " " + nama + ", kamu akan membantu temanmu yang terluka"
        } else if (peran === "penyihir") {
            hasil += "Halo " + peran + " " + nama + ", ciptakan keajaiban yang membantu kemenanganmu"
        }
    }
    return hasil
}
console.log(proxytia("Diaz", "tabib"))