const express=require("express");
//const productCategories=express.Router();
const product=express.Router();
const mysql=require("mysql");

const pool=mysql.createPool({
    host:"localhost",
    user:"root",
    password:"Satyam@123",
    database:"estore",
    port: 3306,
    multipleStatements:true
})
product.get("/productCategories",(req,res)=>{
    let categoryData;
            pool.query("Select * from categories",(error,categories)=>{
                if(error){
                    categoryData=error;
                    res.status(500).send(categoryData);
                }
                else{
                   categoryData=categories;
                   res.status(200).send(categoryData);
                }
            })  
})

product.get("/getProducts",(req,res)=>{
    let productData;

    pool.query("select * from products",(error,rows)=>{
        if(error){
            res.status(500).send(error);
        }
        else{
            productData=rows;
            res.status(200).send(productData);
        }
    })
})

module.exports=product;