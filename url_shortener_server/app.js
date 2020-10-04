const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()
const server = http.createServer(app)

server.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})

//connect to mongoDB
mongoose.connect(process.env.MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true, useCreateIndex: true
})
const connection = mongoose.connection
connection.once("open", function () {
    console.log("MongoDB database connection established successfully");
})


app.use(cors())

// Log requests to the console.
app.use(logger('dev'));

// extract the body of an incoming request and parse into Json object
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true,
}));

//API routes for application
require('./routes.js')(app);