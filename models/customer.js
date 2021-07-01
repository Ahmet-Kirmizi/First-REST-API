const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    custdate: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

module.exports = mongoose.model('Customer', customerSchema)