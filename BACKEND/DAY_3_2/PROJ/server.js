const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');

// let mClient = new MongoClient('mongodb://127.0.0.1:27017');
let mClient = new MongoClient("mongodb+srv://samp:samp@cluster0.ssm7syn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

mClient.connect()
  .then((connectionObj) => {
    console.log("DB connection Successful");
    const fsddb = connectionObj.db('sampdb');
    const usersCollection = fsddb.collection('users');
    app.set('usersCollection', usersCollection);
    const PORT = 3000;
    app.listen(PORT, () => console.log(`HTTP server started on port ${PORT}`));
  })
  .catch(err => console.log("Error in connection", err));

const userApp = require('./APIs/UserAPI');
const productsApp = require('./APIs/ProductsAPI');

app.use('/user-api', userApp);
app.use('/product-api', productsApp);
//handling ivalid paths
app.use('*',(req,res,next)=>{
  console.log(req.status)
  res.send({message:'Invalid path'})
})

app.use((err,req,res,next)=>{
  res.send({message:"Error Occured",errMessage:err.message})
})