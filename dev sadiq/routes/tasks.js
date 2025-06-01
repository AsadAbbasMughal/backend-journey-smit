import express from 'express';

const tasks = express.Router();

tasks.get('/', (req, res) => {
    res.send("Task first route is working");
});

export default tasks;
