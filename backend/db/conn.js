const mongoose = require('mongoose')

async function main() {

    try {
        await mongoose.connect('mongodb+srv://Rauber:8rEnf54xrfxfrHDT@cluster0.scqjsnc.mongodb.net/?retryWrites=true&w=majority')
        // mongodb+srv://Rauber:<password>@cluster0.yamf4hm.mongodb.net/?retryWrites=true&w=majority
        console.log('connect db')

    } catch (error) {
        console.log(`Erro ${error}`)
    }

}

module.exports = main;