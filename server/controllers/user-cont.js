const User = require('../model/user')
const UserService = require('../middleware/users')

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

const validateUser = async (req,res) =>{
    // await UserService.validate(req.params).then((result)=>{
        
    // })
    await User.findOne({username: req.params.username, password: req.params.pass}).then((user) =>{
        res.status(200).json({user})
    }).catch((err) =>{
        res.status(500).json({err})
    })
}


module.exports = {addUser, getAccount, validateUser}