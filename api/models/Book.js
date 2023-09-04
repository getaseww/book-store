const mongoose=require('mongoose');
const User = require('./User');

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
    coverImg:{
        type:String,
        required:true,
    },
    no_of_page:{
        type:String,
    },
    authorId:{
        type:String,
        ref:User,
        required:true,
    },
    description:{
        type:String,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model("books",BookSchema);