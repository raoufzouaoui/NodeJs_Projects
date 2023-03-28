// we'll dynamically add all of these values to our database so instead of going to manual route we're one by one we add them we'll right away just add them to our database by actually invoking the populate.js

require('dotenv').config()

const connectDB = require('./db/connect')
const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany() // delete all the data
        await Product.create(jsonProducts)
        console.log('Success!!!!')
    } catch (error) {
        console.log(error)
    }
}

start()