const fs = require('fs');

const readline = require('readline');
const { json } = require('stream/consumers');
// const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ 
    input :process.stdin,
    output : process.stdout });

rl.question('Masukan nama lengkap : ', (nama) => {
    rl.question('Masukan umur anda : ', (umur) => {
        rl.question('Masukan sekolah anda : ', (sekolah) => {
        
        // console.log ("-- data saya --")
        // console.log(` nama saya adalah : ${nama} sedangakan umur saya ${umur} tahun, saya bersekolah di ${sekolah} `)
  

        const data = { nama , umur, sekolah,}
        const fileDb = fs.readFileSync("./db/data.json" , "utf8");
        const dataDiri = JSON.parse(fileDb)

        dataDiri.push(data)
        fs.writeFileSync("./db/data.json", JSON.stringify(dataDiri,null, 2))
        console.log("Data berhasil ditambahkan")
        // TODO: Log the answer in a database
        rl.close();
    } )
} )
  
});