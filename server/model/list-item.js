const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listItemSchema = new Schema({
    list_item: {
        gKey : {
            type: String,
            required: [true, "group key required"],
            unique: true,
            maxlength: [10, "key cannot be more than 10 characters"]
        },
        title: {
            type: String,
            required: [true],
            maxlength: [20, "can only be below 20 characters"]
        },
        content:{
        type: String,
        required: [true],
        maxlength: [1000, "can only be below 1000 characters"]
        },
        date:{
            default: Date.now(),
        },
        asigned:{
            type: String
        },
        status:{
            type: boolean,   
        }
    }
})