const Comment = require('../model/comment')

const addComment = async (req,res) =>{
    try{
        const comment = await Comment.create(req.body);
        res.status(201).json({comment})
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Server Error', msg:err})
    }
}

module.exports = {addComment}