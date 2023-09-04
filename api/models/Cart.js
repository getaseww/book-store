const mongoose=require('mongoose');
const Book = require('./Book');

const CartSchema= new mongoose.Schema({
    bookId:{
        type:String,
        ref:Book,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model("carts",CartSchema);