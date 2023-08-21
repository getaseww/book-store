const User = require("../models/User");
const { encrypt } = require("../utils/helper");
const bcrypt = require("bcrypt")
const jwt=require('jsonwebtoken')


const create = async (req, res) => {
    const { password, ...data } = req.body;

    const encryptedPass = encrypt(password);

    const user = new User({ password: encryptedPass, ...data });
    user.save()
        .then((result) => {
            res.status(201).json({
                data: result,
                message: "Data Added successfully!",
            })
        }).catch((error) => {
            res.status(500).json({
                error: error,
                message: "Something went wrong",
            })
        })
}

const login = async (req, res) => {

    const user = await User.findOne({ email: req.body.email })
    console.log("user", user);
    if (user) {
        bcrypt.compare(req.body.password, user.password, (error, result) => {
            if (result) {
                console.log("result");
                const token = jwt.sign(
                    {
                        email: user.email,
                        id: user._id,
                        password:user.password
                    },
                    process.env.TOKEN_KEY
                );
                res.status(200).json({
                    data: user,
                    token,
                    message: "logged in successfully!",
                })
            } else if (error) {
                res.status(500).json({
                    message: error,
                })
            } else {
                res.status(404).json({
                    message: "Invalid Password, try again",
                })
            }
        })

    } else {
        res.status(400).json({
            message: "No user found with this email!",
        })
    }
}


const findAll=(req,res)=>{
    User.find({}).then((user)=>{
        res.status(200).json({user,length:user.length})
    }).catch((error)=>{
        res.status(500).json({error})
    })
}




module.exports = { create, login,findAll };