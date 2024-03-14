function namaRelasi(nama) {
    return `Hello My Name is ${nama}`
}

function namaDaerah(daerah) {
    return `My County in ${daerah}`
}

function sekolah(namaSekolah , jurusanSekolah){
    const data = {
        namaSekolah,
        jurusanSekolah 
    }
    return data
}

function abjadArr(abjad) {
    const abjadLama =  ["a","b","c","d"]
    if(abjad !== undefined){
        abjadLama.push(abjad)
    }
    return abjadLama
}

module.exports = {namaDaerah,namaRelasi,sekolah,abjadArr}