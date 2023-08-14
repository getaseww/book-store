const mongoose=require('mongoose')

const BookSchema= new mongoose.Schema({
    title:{
        type:String,
    },
    no_of_page:{
        type:String,
    },
    author:{
        type:String,
    },
    description:{
        type:String,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model("books",BookSchema);