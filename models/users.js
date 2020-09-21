const mongoose = require('mongoose')
// const Schema = mongoose.Schema
const {Schema, model} = mongoose;

const userSchema = Schema({
    username: {type: String, unique: true, required: true},
    password: String
})

const User = mongoose.model('User', userSchema)

module.exports = User;