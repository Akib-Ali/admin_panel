const express = require('express');
const app = express()
const port = 8005
require('./db/conn')
const cors = require('cors')
const router = require('./routes/router')


app.use(express.json())
app.use(cors())
app.use(router)




app.listen(port,()=>{
    console.log(`your server start on port number ${port}`)
})