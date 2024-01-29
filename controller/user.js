import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// const index = fs.readFileSync('index.html', 'utf-8')
const data = JSON.parse(fs.readFileSync(path.resolve(__dirname,'../data.json'), 'utf-8'))
const users = data.users

export const getuser = (req, res) => {
    console.log(req.body);
    users.push(req.body);
    res.status(201).json(req.body);
}

export const postuser = (req, res) => {
    console.log(req.params)
    res.json(users)
}

export const putuser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex((item) => item.id === id)
    users.splice(userIndex, 1, { ...req.body, id: id })
    res.status(201).json();
}

export const patchuser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex((item) => item.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1, { ...user, ...req.body })
    res.status(201).json()
}

export const deleteuser = (req, res) => {
    const id = +req.params.id;
    const userIndex = users.findIndex(p => p.id === id)
    const user = users[userIndex]
    users.splice(userIndex, 1)
    res.status(201).json(user)
}
