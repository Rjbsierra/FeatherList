const List = require('../model/list')
const {EnumError, BadRequestError} = require('../errors')

const addListItem = async (req,res) =>{
    req.body.creator_id = req.user.id
    await List.findOneAndUpdate ({_id:req.params.id, user_id: req.user.id}, {$push:{list_items : req.body}}, {new:true,runValidators:true})
    .then((list)=>{
        if(!list){
            throw new BadRequestError('error encoutnered: User not permited!')
        }
        res.status(201).json({list})
    }).catch((err) =>{
        if(err.name === "ValidationError"){
            throw new EnumError('Validation Error')
        }else{
            throw new BadRequestError('error encoutnered: ' +  `List not found`)
        }
    })
}

const getListItems = async (req,res)=>{
    await List.findById({_id : req.params.id}, 'list_items').then((list) =>{
        res.status(200).json({list})
        console.log(`List obtained: ${list}`)
    }).catch((err)=>{
        res.status(500).json({msg : err});
        console.log('Error encountered: ' + `List with ID ${listId} not found`)
    })
}


// deletes item list
const deleteListIten = async (req,res) =>{
    await List.findOneAndUpdate ({_id: req.body.listId, user_id: req.user.id, 'list_items._id' : req.body.itemId}, {$pull: {'list_items._id' : req.body.itemId}}).then((list)=>{
        if(!list){
            throw new BadRequestError('error encountered: User not permitted!')
        }
        res.status(200).json({mgs: "List item deleted successfully", list})
    }).catch((err)=>{
        throw new BadRequestError(`Error encountered: ${err}`)
    })
}

// updating item list (changing user, changing time limit, update status)
const updateListItem = async (req,res) =>{
    await List.findOneAndUpdate({_id: req.body.listId, user_id: req.user.id, 'list_items._id': req.body.itemId }, 
        {$set: {'list_items.timer': req.body.timer, 'list_items.status': req.body.status}}).then((list)=>{
        if(!list){
            throw new BadRequestError('error encountered: User not permitted!')
        }
        res.status(200).json({msg: 'list item updated successfully'})
    }).catch((err)=>{
        throw new BadRequestError(`Error encountered: ${err}`)
    })
}

const updateListUser = async (req,res) =>{
    await List.findOneAndUpdate({_id: req.body.listId, user_id: req.user.id, 'list-items._id': req.body.itemId,'list_items.asigned' : true},{$set: {'list-items.user_id': req.body.user_id}}).then((list)=>{
        if(!list){
            throw new BadRequestError('Error encountered: User not permitted!')
        }
        res.status(200).json({msg: 'user updated successfully'})
    }).catch((err)=>{
        throw new BadRequestError({mgs: `Error encountered: ${err}`}) 
    })
}

// assigns a user to a list item
const assignListUser = async (req,res) =>{
    await List.findOneAndUpdate({_id: req.body.listId, user_id: req.user.id, 'list_items._id': req.body.itemId}, {$push: {'list-items.user_id': req.body.userId}}).then((list)=>{
        if(!list){
            throw new BadRequestError('Error encountered: unable to assign user')
        }
        res.status(200).json({msg: 'User assigned successfully'})
    }).catch((err)=>{
        throw new BadRequestError({mgs: `Error encountered: ${err}`}) 
    })
}

module.exports = {addListItem, getListItems, updateListItem, updateListUser, assignListUser}