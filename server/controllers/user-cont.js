const User = require('../model/user')

const addUser = async (req,res)=>{
    await User.create(req.body).then((user) =>{
        res.status(201).json({user})
    }).catch((err)=>{
        console.log(`error encountered: ${err}`)
        res.status(500).json({msg: `Error creating user: ${err}`})
    })
}

const getAccount = async (req,res) =>{
        const {id: userId} = req.params;
        await User.findById({_id: userId}).then((user) =>{
            res.status(200).json({user})
        }).catch((err) => {
                console.log('error encoutnered: ' + err)
                res.status(500).json({mgs: `Error retrieving user : ${err}`})
            })
}




module.exports = {addUser, getAccount}