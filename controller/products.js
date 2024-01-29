import fs from 'fs'
import { Product } from '../model/product.js';
import mongoose from 'mongoose';


export const postProduct = (req, res) => {
    const product = new Product(req.body);
    product.save()
    res.status(201).json(product);
      
}

export const getProduct = async(req, res) => {
     const product = await Product.find()
         res.json(product)
}


export const putProduct = async(req, res) => {
    const id = req.params.id;
    console.log({id})
    try{
        const product = await Product.findOneAndReplace({_id:id},req.body)
        res.status(201).json(product);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}

export const patchProduct = async(req, res) => {
    const id = req.params.id;
    console.log({id})
    try{
        const product = await Product.findOneAndUpdate({_id:id},req.body)
        res.status(201).json(product);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}

export const deleteProduct = async(req, res) => {
    const id = req.params.id;
    console.log({id})
    try{
        const product = await Product.deleteOne({_id:id},req.body)
        res.status(201).json(product);
    }catch(err){
        console.log(err)
        res.status(400).json(err);
    }
}
