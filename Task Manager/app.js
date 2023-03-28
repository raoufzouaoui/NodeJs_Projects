const express = require('express');
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect');
const { connect } = require('mongoose');
require('dotenv').config()  // to keep your secret variables actually secret set up the detenv get the package and we will be able to access them anywhere in our app by using process.env
const notFound = require('./middleware/not-found')

//middleware
app.use(express.static('./public'))
app.use(express.json()) // if we don't use this then we win't have that data in req.body

//routes

app.use('/api/v1/tasks', tasks) // that's going to be that root route for the tasks router

app.use(notFound)

const port = 3000

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }catch (error){
        console.log(error)        
    }
}

start()

