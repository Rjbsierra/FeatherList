const List = require('../model/list')
const {BadRequestError} = require('../errors')


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



module.exports = {addComment}