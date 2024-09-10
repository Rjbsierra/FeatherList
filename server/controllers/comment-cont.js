const List = require('../model/list')

const addComment = async (req,res) =>{
    try{
        const {id: listId} = req.params;
        
        const list = await List.findByIdAndUpdate({_id:listId}, {$push:{comments: req.body}},{new:true,runValidators:true})
        res.status(201).json({list})
    }catch(err){
        res.status(500).json({msg: err})
        console.log('error encoutnered: ' +  `List with ID ${listId} not found`)
    }
}



module.exports = {addComment}