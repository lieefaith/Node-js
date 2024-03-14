const getClass = (number) => {
    const code = number === 1 ? "SIJA" : "RPL"
    return{number , code}
}

// console.log(getClass(3))


const funcKelas = (kode , deskripsi, kelas) => {
    return{kode, deskripsi,kelas}
}

const getKelasDescripsi = (kodeId) => {
    const kelas = kodeId === 1
    ? funcKelas("SIJA" , "sistem Informasi Jaringan Dan Aplikasi",11)
    : funcKelas("RPL" , "Rekayasa Perangkat Lunak",12);

    return {kodeId , kelas}
}




// async
// const getKelasAsync = async(kodeId) => {
//     const kelas = kodeId === 1 ? "SIJA" : "RPL";
//         return { kodeId , kelas}
// }

// getKelasAsync(1).then(console.log)

const classfunc = (kode , deskripsi) => {
    return {kode, deskripsi}
}


const getKelasAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let kelas
            if (id === 1) {
                kelas = classfunc("SIJA", "Sistem Informasi Jaringan dan Aplikasi")
            } else if (id === 2) {
                kelas = classfunc("RPL", "Rekayasa Perangkat Lunak")
                resolve({ id, kelas })
            }
        }, 1000)
    })
}

module.exports = {getKelasAsync , getKelasDescripsi}