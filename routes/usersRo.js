import express from 'express'
import { getuser,postuser,deleteuser,patchuser,putuser } from '../controller/user.js';
export const usersRouter = express.Router()

usersRouter
.post('/', getuser)
.get('/', postuser)
.put('/:id',putuser)
.patch('/:id', patchuser)
.delete('/:id', deleteuser)

