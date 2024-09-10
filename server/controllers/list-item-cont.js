const List = require('../model/list')

const addListItem = async (req,res) =>{
    try{
        const list = await List.findByIdAndUpdate({_id:req.params.id}, {$push:{list_items : req.body}}, {new:true,runValidators:true})
        res.status(201).json({list})
    }catch(err){
        res.status(500).json({msg: err});
        console.log('error encoutnered: ' +  `List with ID ${listId} not found`)
    }
}

const getListItems = async (req,res)=>{
    const {id : listId} = req.params;
    await List.findById({_id : listId}, 'list_items').then((list) =>{
        res.status(200).json({list})
        console.log(`List obtained: ${list}`)
    }).catch((err)=>{
        res.status(500).json({msg : err});
        console.log('Error encountered: ' + `List with ID ${listId} not found`)
    })
}

module.exports = {addListItem, getListItems}