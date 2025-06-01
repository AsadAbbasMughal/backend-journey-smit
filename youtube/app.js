var express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res)=>{
    res.render("test")
    // res.send("ok")
})
app.get('/form', (req, res)=>{
    console.log(req.query);
    
    // res.render("test")
    res.send("ok")
})

app.listen(3000, ()=>{
    console.log("port is working well");
    
})


