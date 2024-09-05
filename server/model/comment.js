const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
    user:{
        type: String,
    },
    content:{
        type: String,
        
    },
    time:{
        type: Date,
        default: Date.now(),
    }
})