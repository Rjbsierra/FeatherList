const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: [true, 'Must have a username']},
    password: {type: String, required: [true, 'Must have a password']},
    role: {type: String,default: "end_user"},
    img: {type: String , default :  null},
    created: {type: Date, default: Date.now()}
})


module.exports = mongoose.model('user', userSchema);