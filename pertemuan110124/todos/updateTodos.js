const {updateById , todoQuestions } = require('./todos')

const update = async () => {
    const id = await todoQuestions("Masukkan id yang ingin diupdate : ")
    const title = await todoQuestions("Masukkan judul baru : ")
    const description = await todoQuestions("Masukkan deskripsi baru : ")
    const sts = await todoQuestions("Masukkan status baru : ")

     updateById (id, {title, description, sts} )
}
update()