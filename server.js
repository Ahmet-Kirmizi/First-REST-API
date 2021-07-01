require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true ,useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('connected to database'))

app.use(express.json())

const getCustomerRouter = require('./routes/getCustomer')
app.use('/getCustomer', getCustomerRouter)

app.listen(3000, () => {
    console.log("Server is live")
})