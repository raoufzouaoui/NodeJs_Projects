const Product = require('../models/product')

const getAllProductsStatic = async (req,res) => {
    const products = await Product.find({ price: { $gt:30 } }).sort('name').select('name price')
    //.limit(4).skip(2)
    res.status(200).json({products, nbHits: products.length})
}
const getAllProducts = async (req, res) => {
    const { featured, company, name, sort, fields } = req.query
    const queryObject = {}

    if (featured) {
        queryObject.featured = featured === 'true' ? true : false 
    }
    if (company) {
        queryObject.company = company 
    }
    if (name) {
        queryObject.name = { $regex: name, $options: 'i'} 
    }
    
    //console.log(queryObject)
    let result =  Product.find(queryObject)
    // sort
    if(sort){
        const sortList = sort.split('-').join(' ')
        result = result.sort(sortList)
    } else {
        result = result.sort('createAt')
    }

    //fileds
    if(fields){
        const filesList = fields.split(',').join(' ')
        result = result.select(filesList)
    }
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || 10
    const skip = (page - 1) * limit
    result = result.skip(skip).limit(limit)

    const products = await result
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProducts,
    getAllProductsStatic,
}