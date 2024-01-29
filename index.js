import 'dotenv/config'
import express from 'express';
import { ProductRouter } from './routes/productRo.js';
import { usersRouter } from './routes/usersRo.js';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('server connected');
}

const server = express();

server.use(express.static('build'));
server.use(express.json());
server.use('/product', ProductRouter);
server.use('/users', usersRouter);
server.use('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, process.env.PUBLIC_DIR, 'index.html'));
});

server.listen(process.env.PORT, () => {
    console.log('server started');
});

