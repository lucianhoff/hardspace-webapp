const express = require('express')

const Product = require('../models/Product')

const productControllers = {

    getProducts: (req,res)=>{
        Product.find()
        .then((response)=>res.json({response}))
        .catch((err)=>console.error(err))

    },
    loadProduct: (req,res) => {
        const {name, images, price, stock, brand, category, description} = req.body
        new Product({name, images, price, stock, brand, category, description}).save()
        .then((response)=>res.json({response}))
        .catch((err)=>console.error(err))

    },
    getOneProduct: (req,res) => {
        const id = req.params.id
        console.log(id)
        Product.findOne({_id:id})
        .then((response)=>res.json({response}))
        .catch((err)=>console.error(err))

    },
    deleteProduct: async (req,res)=>{ 
        let prod
        const id = req.params.id
        try{
            prod = await Product.findOneAndDelete({_id:id})
        }catch(error){
            console.error(error)
        }
        res.json({response:prod,sucess:true})

    },
    modifyProduct: async (req,res)=> {
        let id = req.params.id
        let prod = req.body
        let updated
        try{
            updated = await Product.findOneAndUpdate({_id:id},prod,{new:true})
            console.log(updated)
        }catch(error){
            console.error(error)
        }
        res.json({sucess:updated ? true:false})
    },
    searchProducts: (req,res) => {
        let string = req.params.string
        /* const query = { "name": { $regex: string } } */
        const query = { "name" : { $regex : new RegExp(string, "i") } }
        Product.find(query)
        .then((response)=>res.json({response}))
        .catch((err)=>console.error(err))
    } 
}

module.exports = productControllers;