const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// check folder ada atau tidak, jika tidak maka buatkan folderny
const directory = './db';
if(!fs.existsSync(directory)){
    fs.mkdirSync(directory);
}

// check file ada atau tidak, jika tidak maka buatkan fileny 
const checkFile = './database'
if(fs.existsSync(checkFile)){
    fs.writeFileSync('./database/data.json', '[]', 'utf8')
}

const questionExample = (pertanyaan) => {
  return new Promise((resolve,rejects) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban)
    })
  })
}

const addData = async () => {
const name = await questionExample('Enter your name : ');
const age = await questionExample('Input your age : ');
const hobby = await questionExample('Input your hobby : ');

const data = {name, age,hobby}
const fileDb = fs.readFileSync("./db/data.json" , "utf8");
const dataDiri = JSON.parse(fileDb)

dataDiri.push(data)
fs.writeFileSync("./db/data.json", JSON.stringify(dataDiri,null, 2))
        console.log("Data berhasil ditambahkan")
}
addData()