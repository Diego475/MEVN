const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    surname: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: true
    },
    birt: {
        type: Date,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('User', User)