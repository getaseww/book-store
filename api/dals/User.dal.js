const User=require("../models/User");


const create=(payload)=>{
    return new Promise((resolve,reject)=>{
        const user=new User({...payload});
        user.save().then((res)=> {
            console.log("re",res);
            resolve(res)
        }).catch((error)=>{
            console.log("error",error);
            reject(error);
        })
    })
}


module.exports={create}