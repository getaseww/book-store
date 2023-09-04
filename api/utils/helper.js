const bcrypt=require("bcrypt")

const encrypt=(data)=>{
    var salt = bcrypt.genSaltSync(10);
    // salt is a fixed number of random charachters which is added after the password
    return bcrypt.hashSync(data, salt);
}

const formatNum=(nun)=>{
    // to formate numbers to monet formate 100000000 10,000,000
    
}


module.exports={encrypt}