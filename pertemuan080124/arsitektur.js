const getClass = (number) => {
    const code = number === 1 ? "SIJA" : "RPL"
    return{number , code}
}

console.log(getClass(3))


const funcKelas = (kode , deskripsi, kelas) => {
    return{kode, deskripsi,kelas}
}

const getKelasDescripsi = (kodeId) => {
    const kelas = kodeId === 1
    ? funcKelas("SIJA" , "sistem Informasi Jaringan Dan Aplikasi",11)
    : funcKelas("RPL" , "Rekayasa Perangkat Lunak",12);

    return{kodeId , kelas}
}

console.log(getKelasDescripsi(2))
console.log(getKelasDescripsi(1))