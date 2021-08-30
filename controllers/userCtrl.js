const Users = require('../models/userModel')
const userCtrl = require('../controllers/userCtrl')
const bcrypt = require('bcrypt')

const userCtrl = {
    register: async (req, res) =>{
        try{
            const {name, email, password} = req.body;

            const user = await Users.findOne({email})
            if(user) return res.status(400).json({msg: "The email already exists."})

            if(password.length < 6)
               return res.status(400).json({msg: "Use at leat 6 characters long Password."})

            res.jason({msg: "Register Success!"})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    }
},
login: async(req, res) =>{
    try {
        const {email, password} = req.body;

        const user = await Users.findOne({email})
        if(!user) return res.status(400).json({msg: "User does not exist."})

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch) return res.status(400).json({msg: "Incorrect password."})

        res.json({"Login Success!"})

    } catch (err) {
        return res.status(500).json({msg: err.message})

    }
}
module.exports = userCtrl