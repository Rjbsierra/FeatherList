const listItem = require('../model/list-item')

const addItem = async => (req,res) =>{
    try{
        listItem.create(req.body);
    }catch(err){
        console.error(err)
        res.status(500).json({error: 'Server error', msg: err})
    }
}

module.exports = {addItem}