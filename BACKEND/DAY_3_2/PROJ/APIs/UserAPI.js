const express = require('express');
const UserApp = express.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const tokenVerify = require('../middlewares/tokenVerify');
const expressAsyncHandler=require('express-async-handler')
// Middleware
UserApp.use(express.json());

const middleware_1 = (req, res, next) => {
  console.log('middleware_1');
  next();
};

const middleware_2 = (req, res, next) => {
  console.log('middleware_2');
  next();
};

UserApp.use(middleware_1);
UserApp.use(middleware_2);

UserApp.get('/users', tokenVerify, expressAsyncHandler(async (req, res) => {
  
    const usersCollection = req.app.get('usersCollection');
    let usersList = await usersCollection.find().toArray();
    res.send({ message: "users", payload: usersList });
   
}));

UserApp.get('/users/:username', tokenVerify, expressAsyncHandler(async (req, res) => {
  try {
    const usersCollection = req.app.get('usersCollection');
    const username = req.params.username;
    let user = await usersCollection.findOne({ username: username });
    if (user) {
      res.send({ message: "one_user", payload: user });
    } else {
      res.status(404).send({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: "Error fetching user", error });
  }
}));

UserApp.post('/users', expressAsyncHandler(async (req, res) => {
  try {
    const usersCollection = req.app.get('usersCollection');
    let newUser = req.body;
    // Verify duplicate user
    let existingUser = await usersCollection.findOne({ username: newUser.username });

    if (existingUser !== null) {
      res.send({ message: "user already exists" });
    } else {
      // Hash the password
      console.log("Hashing password:", newUser.password);
      let hashedPassword = await bcryptjs.hash(newUser.password, 7);
      console.log("Hashed password:", hashedPassword);
      // Replace password with hashed password
      newUser.password = hashedPassword;
      await usersCollection.insertOne(newUser);
      res.send({ message: "user created", payload: newUser });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).send({ message: "Error creating user", error });
  }
}));

UserApp.post('/login', expressAsyncHandler(async (req, res) => {
  try {
    const usersCollection = req.app.get('usersCollection');
    const userCred = req.body;
    let dbuser = await usersCollection.findOne({ username: userCred.username });
    // if user does not exist
    if (dbuser == null) {
      res.send({ message: "Invalid Username" });
    } else {
      let result = await bcryptjs.compare(userCred.password, dbuser.password);
      // if password does not match
      if (result == false) {
        res.send({ message: "Invalid Password" });
      } else {
        // create JWT token with 20 seconds expiration
        let signedToken = jwt.sign({ username: userCred.username }, 'sampreeth', { expiresIn: '24h' });
        // send response
        res.send({ message: "Login Successful", payload: { username: userCred.username, token: signedToken } });
      }
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ message: "Error during login", error });
  }
}));

UserApp.put('/users/:id', tokenVerify, expressAsyncHandler(async (req, res) => {
  try {
    const usersCollection = req.app.get('usersCollection');
    let ModifiedUser = req.body;
    await usersCollection.updateOne({ id: Number(req.params.id) }, { $set: ModifiedUser });
    res.send({ message: "user updated", payload: ModifiedUser });
  } catch (error) {
    res.status(500).send({ message: "Error updating user", error });
  }
}));

UserApp.delete('/users/:id', tokenVerify,expressAsyncHandler( async (req, res) => {
  try {
    const usersCollection = req.app.get('usersCollection');
    await usersCollection.deleteOne({ id: Number(req.params.id) });
    res.send({ message: "user deleted" });
  } catch (error) {
    res.status(500).send({ message: "Error deleting user", error });
  }
}));

module.exports = UserApp;
