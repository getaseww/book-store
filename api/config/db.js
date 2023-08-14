const mongoose = require("mongoose");
const dotenv =require('dotenv')
dotenv.config();

const url = process.env.DB_URL;



const connectToDatabase=()=>{ mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(console.log("MongoDB successfully connected!")).catch(err => console.log(err))
}
module.exports=connectToDatabase;

