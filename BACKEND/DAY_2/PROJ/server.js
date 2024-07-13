const express = require('express');
const app = express();

const { MongoClient } = require('mongodb');
let mClient = new MongoClient('mongodb://127.0.0.1:27017');

mClient.connect()
  .then((connectionObj) => {
    console.log("DB connection Successful")
    const fsddb=connectionObj.db('SAM_TEST_1');
    const usersCollection=fsddb.collection('users')
    app.set('usersCollection',usersCollection);
  
  
  
  
  
  
    const PORT = 4000;
    app.listen(PORT, () => console.log(`HTTP server started on port ${PORT}`));
    }
  )
  .catch(err => console.log("Error in connection", err));

const userApp = require('../APIs/UserAPI');
const productsApp = require('../APIs/ProductsAPI');

app.use('/user-api', userApp);
app.use('/product-api', productsApp);