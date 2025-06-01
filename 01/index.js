    import express from 'express'
    import productRoute from './routes/productRoute.js';
import userRouter from './routes/user.js';
   



    const app = express();
    const PORT = 8000;

    // app.use(express.json());


    // Simple Route
    app.use('/product', productRoute);
    app.use('/user', userRouter)

    // app.get('/user', (req, res)=>{
    //     res.send(user)
    // })



    // Server Start
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
