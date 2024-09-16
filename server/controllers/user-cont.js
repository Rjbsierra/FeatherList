const User = require('../model/user')
const UserService = require('../middleware/users')
const AuthService = require('../middleware/auth')
const jwt = require('jsonwebtoken');


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
    await User.findOne({username: req.body.username, password: req.body.password}).then((user) =>{
        const token = jwt.sign({username: user.username, role: user.role, id: user.id}, process.env.JWT_SECRET, {expiresIn: '30d'})
        res.status(200).json({mgs: 'user logged in!',token})
    }).catch((err) =>{
        res.status(500).json({err})
    })
}


module.exports = {addUser, getAccount, validateUser}