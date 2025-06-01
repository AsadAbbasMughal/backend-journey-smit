const express = require('express');
const dbConnection = require('./dbConnection.js');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.json());

app.get('/student-read', async (req, res) => {
       let myDB = await dbConnection();
       let stCollection = myDB.collection('course');
       let data = await stCollection.find().toArray()
       let myObj = {
        status: 1,
        msg: "Student List",
        data
       }
       res.send(myObj)
    res.send("Student View API"); // corrected spelling: Sudent -> Student
});

app.post('/student-insert', async (req, res) => {
    let myDB = await dbConnection();
    let stCollection = myDB.collection('course');

    let {sName, sEmail} = req.body
    let obj = {sName, sEmail}
    console.log(sName);
    console.log(sEmail);

    let insertRes = await stCollection.insertOne(obj)
    let resObj = {
        status: 1,
        msg: "data insert succ",
        insertRes
    }

    res.send(resObj)
    

    res.send("Student Insert API"); // corrected spelling: Sudent -> Student
});

app.listen(PORT, () => {
    console.log(`Port is working ${PORT}`);
});
