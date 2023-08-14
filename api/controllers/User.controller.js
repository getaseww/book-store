const User = require("../models/User");


const create = async(req, res) => {
    const user = new User(req.body);
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



module.exports = { create };