require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
})

db.on('open', ()=>{
    console.log('SCAREM', PORT)
})


app.use(cors())
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('SCAREM')
})

// app.use("/api/", require("./controllers/artPieces.js"))

app.listen(PORT, ()=>{
    console.log('TAREM', PORT)
})