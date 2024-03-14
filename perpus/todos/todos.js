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
    return new Promise((resolve) => {
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

  
const questionDataWithValidation = async (question) => {
    let answer = '';
    do {
        answer = await todoQuestions(question);
        if (!answer.trim()) {
            console.log('Error: Field harus diisi. Silakan coba lagi.');
        }
    } while (!answer.trim());

    return answer;
};

const storeTodo = async () => {
    const username = await questionDataWithValidation('Masukkan username: ');
    const game = await questionDataWithValidation('Masukkan game: ');
    const pembayaran = await questionDataWithValidation('Masukkan metode pembayaran: ');

    let price = '';
    while (isNaN(price) || price.trim() === '') {
        price = await questionDataWithValidation('Masukkan harga: ');
        if (isNaN(price) || price.trim() === '') {
            console.log('Error: Harga harus berupa angka. Silakan coba lagi.');
        }
    }

    const sts = await questionDataWithValidation('Masukkan status (Completed/Pending): ');
    const notes = await questionDataWithValidation('Masukkan catatan: ');

    const id = generateRandomId(10);
    const todo = { id, username, game, pembayaran, price: parseFloat(price), sts, notes };
 
    
    try {
        const file = fs.readFileSync(checkFile, 'utf-8');
        const dataTodos = JSON.parse(file);
        dataTodos.push(todo);
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2));
        console.log('Data berhasil ditambahkan');
    } catch (error) {
        console.error('Gagal menambahkan data:', error.message);
    }
};


  
  

const getById = (id) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const data = JSON.parse(file);
    const findTodoId = data.find(todo => todo.id === id)

    if(findTodoId) {
        console.log(findTodoId)
        return findTodoId
    }else{
        return false
    }
}


const updateById = (id, updateTodo) => {
    const file = fs.readFileSync(checkFile, 'utf-8');
    const dataTodos = JSON.parse(file);
    const index = dataTodos.findIndex(todo => todo.id === id);

    if (index !== -1) {
        dataTodos[index] = { ...dataTodos[index], ...updateTodo };
        fs.writeFileSync(checkFile, JSON.stringify(dataTodos, null, 2));
        console.log(`Successfully updated: ${id}`);
        return true; // Update berhasil
    } else {
        console.log(`Data dengan ID ${id} tidak ditemukan`);
        return false; // Update gagal karena ID tidak ditemukan
    }

};


const deleteById = (id) => {
    const file = fs.readFileSync(checkFile , 'utf-8')
    const dataTodos = JSON.parse(file)
    const filterTodoId = dataTodos.filter(todo => todo.id !== id)

    if(filterTodoId.length < dataTodos.length) {
        fs.writeFileSync(checkFile, JSON.stringify(filterTodoId, null , 2 ));
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
    deleteById,
    questionDataWithValidation
}

