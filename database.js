const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
//const url = 'mongodb+srv://rishi-node-js:UsuuN1i5XJg2BjS9@rishinodejs.qctoagl.mongodb.net/';
//const url = "mongodb+srv://rishi-node-js:UsuuN1i5XJg2BjS9@rishinodejs.qctoagl.mongodb.net/?appName=RishiNodeJS";
const url = "mongodb://rishi-node-js:UsuuN1i5XJg2BjS9@ac-p9zstxz-shard-00-00.qctoagl.mongodb.net:27017,ac-p9zstxz-shard-00-01.qctoagl.mongodb.net:27017,ac-p9zstxz-shard-00-02.qctoagl.mongodb.net:27017/?ssl=true&replicaSet=atlas-en28ew-shard-0&authSource=admin&appName=RishiNodeJS"
const client = new MongoClient(url);

//console.log(url)
// Database Name
const dbName = 'Rishi';

async function main() {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    const collection = db.collection('Test');

    // the following code examples can be pasted here...

    //insert data
    // const data = {
    //     Name: 'Akshay',
    //     LastName: 'Saini',
    //     City: 'Dheradhun',
    //     Phone: '9988998855'
    // }
    // const insertResult = await collection.insertMany([data]);
    // console.log('Inserted documents =>', insertResult);

    //read documents
    const findResult = await collection.find({}).toArray();
    console.log('Found documents =>', findResult);

    //remove doc
    // const deleteResult = await collection.deleteMany({ firstname: 'Nitesh' });
    // console.log('Deleted documents =>', deleteResult);

    //update documnet
    const updateResult = await collection.updateOne({ Name: "Nitesh" }, { $set: { Name: "Nitesh03" } });
    console.log('Updated documents =>', updateResult);

    return 'done.';
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());