const {deleteById , todoQuestions} = require('./todos')

const deleteTodo = async () => {
    const id = await todoQuestions("Masukkan id yang ingin dihapus : ")
    deleteById(id)
}
deleteTodo()