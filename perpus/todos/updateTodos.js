const { updateById, todoQuestions, getById, questionDataWithValidation} = require('./todos');

const update = async () => {
    let id;
    let exist;

    do {
        id = await todoQuestions("Masukkan ID yang ingin diupdate: ");
        exist = getById(id);

        if (!exist) {
            console.log(`ID ${id} tidak ditemukan. Silakan coba lagi.`);
        }
    } while (!exist);

  

    const username = await todoQuestions("Masukkan username baru (tekan enter untuk melewati): ");
    const game = await todoQuestions("Masukkan nama game baru (tekan enter untuk melewati): ");
    const pembayaran = await todoQuestions("Masukkan metode pembayaran baru (tekan enter untuk melewati): ");
    let price = await todoQuestions("Masukkan harga baru (tekan enter untuk melewati): ");
    const sts = await todoQuestions("Masukkan status baru (Completed/Pending) (tekan enter untuk melewati): ");
    const notes = await todoQuestions("Masukkan keterangan baru (tekan enter untuk melewati): ");

    const updateData = {
        username: username.trim() !== '' ? username :exist.username,
        game: game.trim() !== '' ? game :exist.game,
        pembayaran: pembayaran.trim() !== '' ? pembayaran :exist.pembayaran,
        price: price.trim() !== '' && !isNaN(price) ? parseFloat(price) :exist.price,
        sts: sts.trim() !== '' ? sts :exist.sts,
        notes: notes.trim() !== '' ? notes :exist.notes
    };

    

    updateById(id, updateData);
    console.log('Data berhasil diperbarui');
};
module.exports = update

