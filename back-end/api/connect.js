import {MongoClient} from "mongodb"
import 'dotenv/config';

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

const URI = `mongodb+srv://${USER}:${PASSWORD}@cluster0.r3vru.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(URI)

export const db = client.db("Spotify-Clone")


