const User = require('../model/user')

const addUser = async (req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json({user})
    }catch(err){
        res.status(500).json({mgs: err})
        console.log('error encoutnered: ' + err)
    }
}

module.exports = {addUser}