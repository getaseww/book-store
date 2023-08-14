const express=require('express');
const bodyParser=require('body-parser');
const dotenv=require('dotenv');
const connectToDatabase =require ('./config/db.js'); 
const userRoutes =require("./routes/User.routes.js")
const bookRoutes=require('./routes/Book.routes.js');

dotenv.config();
const app=express();
const port= process.env.PORT||8000
app.use(express.json())
app.use(bodyParser.json());
connectToDatabase();

app.use("/api",userRoutes);
app.use('/api',bookRoutes);


app.listen(port,()=>{
  console.log(`api started at port ${port}` )
})