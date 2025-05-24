import express, { json } from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/user.js'

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DB_NAME = 'Blogit';
mongoose.connect(MONGO_URI+DB_NAME)

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({username, password});
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e.message)
    }
})

app.listen(3000, () => {
    console.log('app running at port http://localhost:3000/')
})