// const fs = require('fs')
const fs = require('fs')
// writeFileSync
// fs.writeFile(file, data, options, callback): Menulis atau menimpa file dengan data yang baru.

// readFileSync
// fs.readFile(path, options, callback): Membaca isi file di lokasi yang ditentukan.

// unlinkFileSync
// fs.unlink(path, callback): Menghapus file.

// mkdirSync
// fs.mkdir(path, options, callback): Membuat direktori baru.


fs.writeFileSync("perkenalan.txt" , "perkenalkan nama saya Adli")
console.log(fs)

const perkenalan = fs.readFileSync("perkenalan.txt")
console.log(perkenalan.toString())

fs.mkdir('new_directory', (makeD) => {
  if (makeD) throw makeD;
  console.log('Direktori baru dibuat.');
});

fs.unlink('perkenalan.txt', (makeD) => {
  if (makeD) throw makeD;
  console.log('File dihapus.');
});

