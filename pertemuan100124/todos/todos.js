const generateRandomId = require('./generateRandomId.js');

const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkFile = "./database"
if(!fs.existsSync(checkFile)) {
    fs.writeFileSync(checkFile, "[]" , "utf-8");
}

const todoQuestions = (question) => {
    return new Promise((resolve, reject) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

const todos = () => {
    const fileTodos = fs.readFileSync('./database/todos.json' , 'utf-8');
    const data = JSON.parse(fileTodos);
    console.log(data);
}

// menambahkan data baru
const storeTodo = (title , description , sts) => {
    const id = generateRandomId(10)
    const todo = {id, title, description,sts}
    const file = fs.readFileSync(checkFile, 'utf-8');

    const dataTodos = JSON.parse(file) 
    dataTodos.push(todo)
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos))
    console.log("Data berhasil ditambahkan")
    rl.close()
}


module.exports = {
    todoQuestions,
    todos,
    storeTodo
}

rl.close()