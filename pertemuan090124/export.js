const {getKelasDescripsi , getKelasAsync} = require("./arsitektur.js")
console.log(getKelasDescripsi(2))


getKelasAsync(2)
  .then((kelasSija) => {
    console.log(kelasSija);
  })

