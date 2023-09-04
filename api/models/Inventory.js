const mongoose=require('mongoose')

const InventorySchema= new mongoose.Schema({
    productName:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
    },
},{
    timestamps:true,
})

module.exports=mongoose.model("inventories",InventorySchema);