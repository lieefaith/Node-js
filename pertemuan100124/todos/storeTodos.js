const {storeTodo , todoQuestions } = require('./todos')

const addTodo = async () => {
    const title = await todoQuestions("Masukkan judul : ")
    const description = await todoQuestions("Masukkan deskripsi : ")
    const sts = await todoQuestions("Masukkan status : ")

    storeTodo(title, description, sts)
}
addTodo()