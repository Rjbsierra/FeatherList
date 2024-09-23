const List = require('../model/list')
const {BadRequestError} = require('../errors')

//add comment
const addComment = async (req,res) =>{
    req.body.user_id = req.user.id
    await List.findOneAndUpdate({_id:listId}, {$push:{comments: req.body}},{new:true,runValidators:true}).then((list)=>{
        res.status(201).json({list})

    }).catch((err)=>{
        throw new BadRequestError(err.message)
    })

    try{
        const {id: listId} = req.params;
        
        const list = await List.findOneAndUpdate({_id:listId}, {$push:{comments: req.body}},{new:true,runValidators:true})
    }catch(err){
        res.status(500).json({msg: err})
        console.log('error encoutnered: ' +  `List with ID ${listId} not found`)
    }
}

//delete comment
const deleteComment = async (req,res) =>{
    await List.findOneAndUpdate({_id: req.body.listId, 'comments._id' : req.body.commentId ,'comments.user_id' : req.user.id}, {$pull: {comments: {_id : req.body.commentId}}}).then((list)=>{
        res.status(200).json({list})
    }).catch((err)=>{
        throw new BadRequestError(`Error encountered: ${err.message}`)
    })
}

//edit comment
const updateComment = async(req, res)=>{
    await List.findOneAndUpdate({_id: req.body.listId, 'comments._id' : req.body.commentId ,'comments.user_id' : req.user.id}, {$set: {comments: {comment: res.body.msg}}}).then((list)=>{
        res.status(200).json({list})
    }).catch((err)=>{
        throw new BadRequestError(`Error encountered: ${err.message}`)
    })
}

module.exports = {addComment, deleteComment, updateComment}