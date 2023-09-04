const mongoose=require('mongoose')
var SchemaTypes = mongoose.Schema.Types

const RoleSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    description:{
        type:String,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model('roles',RoleSchema)