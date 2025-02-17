import express from "express"
import {db} from "./connect.js"
import cors from "cors"
import path from "path"

const __dirname = path.resolve()


const app = express()
const {PORT} = process.env || 3000


app.use(cors())

app.get("/api", async (req, res) =>{
    res.send("Test")
})

app.get(`/api/artists`, async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray())
})

app.get(`/api/songs`, async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray())
})

app.use(express.static(path.join("../front-end/dist")))


app.get("*", async (req, res) =>{
    res.sendFile(path.join("../front-end/dist/index.html"))
})

app.listen(PORT, () => {
    console.log(`Servidor ouvindo na port : ${PORT}`)
})


