const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const listSchema = new Schema({ 
        user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
        created: {type: Date, default : Date.now()},
        title: {type: String, required: [true, "title is mandatory"]},
        type: {type: String, default: 'Standard', enum: {values: ['Standard', 'Group'], message : '{VALUE} is not supported'}},
        comments: [{
            user_id:{type: mongoose.Schema.Types.ObjectId, ref: 'user'},
            comment: {type: String},
            time:{type: Date, default: Date.now()}
        }],
        list_items:[{
            title: {
                type: String,
                maxlength: [20, "can only be below 20 characters"]
            },
            content:{
                type: String,
                maxlength: [1000, "can only be below 1000 characters"]
            },
            timer:{
                Date
            },
            asigned:{
                type: Boolean,
                default: false,
            },  
            status:{
                type: String, default: "Pending", enum : {values: ['Pending', 'Completed'], message : '{VALUE} is not supported'}
            },
            created:{
                type: Date, default: Date.now()
            },
            creator_id:{
                type: mongoose.Schema.Types.ObjectId, ref: 'user'
            },
            user_id:{
                type: mongoose.Schema.Types.ObjectId, ref: 'user'
            }
        }]
})

module.exports = mongoose.model('List', listSchema);