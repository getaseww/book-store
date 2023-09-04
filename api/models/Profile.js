const mongoose = require('mongoose')
const User = require('./User')
var SchemaTypes = mongoose.Schema.Types

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: String,
        ref:User,
        required: true,
    },
    profilePic: {
        type: String,
    },
    bio: {
        type: String,
    },
}, {
    timestamps: true,
})

module.exports = mongoose.model('profiles', ProfileSchema)