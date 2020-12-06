// This line must come before importing any instrumented module.
const tracer = require('dd-trace').init({
    logInjection: true
})


require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const db = mongoose.connection
const path = require('path')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const MONGODB_URI = process.env.MONGODB_URI

const dd_options = {
    'response_code':true,
    'tags': ['env:staging']
  }
  
const connect_datadog = require('connect-datadog')(dd_options);

var StatsD = require('hot-shots');
var dogstatsd = new StatsD();



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
tracer.use('express', {
    service: 'tarem-api'
  })

app.get('/', (req, res)=>{
    // dogstatsd.increment('page.views')
    //test line
    res.send('SCAREM')
})

app.use(connect_datadog)
app.use("/api/", require("./controllers/readings.js"))

app.listen(PORT, ()=>{
    console.log('TAREM', PORT)
})