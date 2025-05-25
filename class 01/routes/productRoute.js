import express from 'express'
const productRoutes = express.Router()

productRoutes.get('/', (req, res)=>{
    res.send("Product Routes id working")

})

productRoutes.get('/:id', (req, res)=>{
    const data = req.params.id
    res.send(`Product Routes id working id is ${data}`)

})

export default productRoutes