// console.log("hello world");

// frameWork -- Node(req(frontend), res(backend))

import express from 'express'
import dotenv from 'dotenv'
import comments from './comments.js'
import productRoutes from './routes/productRoute.js'

dotenv.config()
const app = express()


app.get('/', (req, res) => {
    res.send("OK")

app.use('/products', productRoutes)




















})
// app.get('/user', (req, res) => {
//     res.send("OK user")
// })
// app.get('/user/:id', (req, res) => {
//     const id = req.params.id
//     res.send(`user id is ${id}`)
// })

// app.get('/comments', (req, res) => {
//     res.send({status:200, message:"Success", data: comments})
// })
// status  message  data  

// app.get('/login', (req, res)=>{
//       res.send(status:200, message:"Success")
// })





const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log("server is working", PORT);
})
