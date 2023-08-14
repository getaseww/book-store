const mongoose=require('mongoose')
var SchemaTypes = mongoose.Schema.Types

const UserSchema=new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String,
    },
    userName:{
        type:String,
    },
    password:{
        type:String,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model('users',UserSchema)