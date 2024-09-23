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

module.exports = {addListItem, getListItems}