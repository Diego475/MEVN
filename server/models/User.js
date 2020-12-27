const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    surname: {
        type: String,
    },
    name: {
        type: String,
    },
    middle_name: {
        type: String,
    },
    birt: {
        type: Date,
    },
    age: {
        type: Number,
    }
})

module.exports = mongoose.model('User', User)