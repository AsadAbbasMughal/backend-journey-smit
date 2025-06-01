const { MongoClient } = require('mongodb');

let dbConnectionURL = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(dbConnectionURL);

let dbConnect = async () => {
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db('stDatabase');
    return db;
};

module.exports = dbConnect;
