import express from 'express'
import { getProduct,postProduct,deleteProduct,patchProduct,putProduct } from '../controller/products.js';
export const ProductRouter = express.Router()

ProductRouter
.post('/', postProduct)
.get('/', getProduct)
.put('/:id',putProduct)
.patch('/:id', patchProduct)
.delete('/:id', deleteProduct)

