const express = require('express');
const cors = require('cors');
const {MongoClient, ServerApiVersion, ObjectId} = require('mongodb')
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000

// middlewares
app.use(cors())
app.use(express.json())

// Database Connection
const uri = process.env.DB_URI

const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverApi: ServerApiVersion.v1 
});

async function run(){
    try{
        const homesCollection = client.db('hotel-flight-db').collection('homes');
        const usersCollection = client.db('hotel-flight-db').collection('users');

        // Save user email & generate JWT

        console.log('Database Connected...')
    } finally{

    }
}

run().catch(err=>console.error(err))

app.get('/', (req, res)=>{
    res.send(`Server is running...`)
})

app.listen(port, ()=>{
    console.log(`server is running...on ${port}`)
})