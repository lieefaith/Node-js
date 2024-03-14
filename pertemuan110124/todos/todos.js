const generateRandomId = require('./generateRandomId.js');

const fs = require('fs');
const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const checkFile = "./database/todos.json"
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
    fs.writeFileSync(checkFile, JSON.stringify(dataTodos ,null, 2 ))
    console.log("Data berhasil ditambahkan")
    
}

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id)

    if(findTodoId) {
        console.log(findTodoId)
    }else{
        console.log(`Data dengan id ini ${id} tidak ditemukan`)
    }
    rl.close()
}
const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile , 'utf-8')
    const dataTodos = JSON.parse(file)
    const index = dataTodos.findIndex(todo => todo.id === id)

    if(index !== -1) {
        dataTodos[index] = {...dataTodos[index], ...updateTodo}
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos,null, 2 ))
        console.log(`Successfully updated : ${id}`)
    }else{
        console.log(`Data dengan id ini ${id} tidak ditemukan`)
    }

    rl.close()
}

const deleteById = (id) => {
    const file = fs.readFileSync(checkFile , 'utf-8')
    const dataTodos = JSON.parse(file)
    const filterTodoId = dataTodos.filter(todo => todo.id === id)

    if(filterTodoId.length < dataTodos.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterTodoId));
        console.log(`Successfully deleted Todo : ${id}`)
    }else{
        console.log(`todo dengan id ini ${id} tidak ditemukan`)
    }
}




module.exports = {
    todoQuestions,
    todos,
    storeTodo,
    getById,
    updateById,
    deleteById
}

