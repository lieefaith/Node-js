const { getById , todoQuestions} = require('./todos')

const todoId = async () => {
    const id = await todoQuestions("masukan id todos : ")
    getById(id) 
}
todoId()