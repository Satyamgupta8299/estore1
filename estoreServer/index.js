const express=require("express");
const product = require("./Routes/product");
const app=express();
const cors=require("cors");

app.use(cors());
app.use("/",product);


const server=app.listen("5001",()=>{
    console.log("App is running on port 5001");
})
