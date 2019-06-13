const express = require('express')
const app = express()
const port = 3000
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors)

//Connect to DB
mongoose.connect('mongodb://localhost/budgeteer-api-db-1', ({useNewUrlParser: true}))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('database connected.')
})

app.use('/', routes)

app.listen(port, () => console.log(`Example app listening on port ${port}`))