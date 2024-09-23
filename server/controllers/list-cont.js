const List = require('../model/list')
const {BadRequestError} = require('../errors')

// gets user list
const getList = async (req,res) =>{

    await List.find({user_id : req.user.id}).then((list) =>{
        res.status(200).json({list})
    }).catch((err)=>{
        res.status(500).json({err})
        console.log('error encoutnered: ' + err)
    })
}


// adds user list
const addList = async (req, res) =>{

        req.body.user_id = req.user.id

        await List.create(req.body).then((list) =>{
            res.status(201).json({list})
        }).catch((err) =>{
        res.status(500).json({msg: err})
        console.log('error encoutnered: ' + err)
    })
}

// deletes user list
const deleteList = async (req,res) =>{
    await List.deleteOne({_id: req.body.listId, user_id: req.user.id}).then((list)=>{
        if(!list){
            throw new BadRequestError('List not found')
        }
        res.status(200).json({mgs: 'List deleted successfully'})
    }).catch((err)=>{
        throw new BadRequestError(`Error encountered: ${err}`)
    })
}

// updates user list title or list type
const updateListTitle = async (req,res) =>{
    await List.findOneAndUpdate({_id: req.body.listId, user_id: req.user.id}, {$set: {title: req.body.msg, type: req.body.type}}).then((list)=>{
        res.status(200).json({mgs: "List title update successful"})
    }).catch((err)=>{
        throw new BadRequestError(`Error encountered: ${err}`)
    })
}

module.exports = {getList, addList, deleteList, updateListTitle}