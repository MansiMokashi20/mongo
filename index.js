const {MongoClient}=require('mongodb');
const url ='mongodb://0.0.0.0:27017';
const client = new MongoClient(url);
async function getData()
{
    let result = await client.connect();
    let db = result.db('Mongo_saample');
    let collection = db.collection('Mongo');
    let response = await collection.find({}).toArray();
    console.log(response);
}
getData();