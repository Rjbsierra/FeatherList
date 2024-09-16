const List = require('../model/list')


const getList = async (req,res) =>{
    await List.find({user_id : req.params.id}).then((list) =>{
        res.status(200).json({list})
    }).catch((err)=>{
        res.status(500).json({err})
        console.log('error encoutnered: ' + err)
    })
}

const addList = async (req, res) =>{
    try{
        const list = await List.create(req.body);
        res.status(201).json({list})
    }catch(err){
        res.status(500).json({msg: err})
        console.log('error encoutnered: ' + err)
    }
}




module.exports = {getList, addList}