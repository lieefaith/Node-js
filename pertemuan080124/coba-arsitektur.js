const funcItem = (hero,namaItem , deskripsi, price,cooldown) => {
    return{hero,namaItem, deskripsi,price,cooldown}
}

const getKelasDescripsi = (kodeId) => {
    const kelas = kodeId === 1
    ? funcItem("Balmond" , "WarAxe","Item biar gacorr",120000,120)
    : funcItem("Brody" , "Hunter Strike","Biar larinya cepat",20000,5);

    return{kodeId , kelas}
}

console.log(getKelasDescripsi(2))