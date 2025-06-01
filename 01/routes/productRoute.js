    import express from "express";
    import data from "../utils/data.js";


    const productRoute = express.Router();

    productRoute.get('/:id', (req, res)=>{
        const {id} = req.params
        const result = data.find((items)=> items.id == parseInt(id))
        
        if(result){
            res.status(400).send({message:"Product routes is working well" , result})
            
        }else{
            res.status(200).send({error: 'something went wrong '})

        }
    })

    export default productRoute