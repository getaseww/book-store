const Book=require('../models/Book');

const create=async(req,res)=>{
    try {
        const data=req.body;
        console.log(data);
        const book=new Book(data);
        const response= await book.save();
        if(response){
            res.status(200).json({
                message:"successfully poted!",
                data:response,
            })
        }else{
            res.status(400).json({
                message:"Not poted!",
                data:response,
            })
        }
    } catch (error) {
        res.status(500).json({message:"Internal sever error",error})
    }
}

const findAll=(req,res)=>{
    Book.find({}).then((book)=>{
        res.status(200).json({book,length:book.length})
    }).catch((error)=>{
        res.status(500).json({error})
    })
}

const findById=()=>{

}

const findOne=()=>{

}

const update=()=>{

}

const remove=()=>{

}

module.exports={create,findAll}